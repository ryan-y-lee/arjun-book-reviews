/**
 * One-time cover fetcher.
 *
 * Reads titles and authors out of src/data/reviews.ts, searches Open Library
 * for each, downloads the best cover into public/covers/<slug>.jpg, and writes
 * public/covers/manifest.json mapping slug -> filename.
 *
 * Re-running is safe: covers already on disk are skipped. Delete a file to
 * refetch just that one.
 *
 *   node scripts/fetch-covers.mjs
 *   node scripts/fetch-covers.mjs --report   (look up, write no files)
 */

import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";

const REPORT_ONLY = process.argv.includes("--report");
const OUT_DIR = "public/covers";
const SOURCE = "src/data/reviews.ts";

/** Goodreads titles carry series suffixes and subtitles that break search. */
export function searchTitle(title) {
	return title
		.replace(/\s*\([^)]*#[^)]*\)\s*$/, "") // "(Hyperion Cantos, #1)"
		.replace(/\s*\([^)]*\)\s*$/, "") // any other trailing parenthetical
		.split(/\s*[:/]\s*/)[0] // drop subtitle after ":" or "/"
		.trim();
}

/** Stable filename per review, derived from the full original title. */
export function slugify(title) {
	return title
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 60);
}

/** Pull {title, author} pairs out of the data module without executing it. */
function extractBooks(src) {
	const books = [];
	const re =
		/title:\s*(?:\n\s*)?("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,\s*\n\s*author:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
	let m;
	while ((m = re.exec(src))) {
		const unquote = (s) => s.slice(1, -1).replace(/\\(.)/g, "$1");
		books.push({ title: unquote(m[1]), author: unquote(m[2]) });
	}
	return books;
}

/**
 * Open Library sometimes files an author only under their original script,
 * e.g. Cixin Liu appears as 刘慈欣, so a surname comparison can never match.
 * Map those cases explicitly rather than skipping the author check entirely.
 */
const AUTHOR_ALIASES = {
	"cixin liu": ["刘慈欣", "liu cixin"],
	"liu cixin": ["刘慈欣", "cixin liu"],
};

const stripAccents = (s) =>
	s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const lastNameOf = (author) => {
	const cleaned = author.replace(/\s+(Jr\.|Sr\.|III|II)$/i, "").trim();
	const parts = stripAccents(cleaned).split(/\s+/);
	return (parts[parts.length - 1] || "").toLowerCase();
};

const norm = (s) =>
	stripAccents(s.toLowerCase())
		.replace(/[^a-z0-9]+/g, " ")
		.trim();

/**
 * Series labels differ between the two sources — Goodreads says
 * "(Remembrance of Earth's Past, #2)" where Open Library says
 * "(The Three-Body Problem Series Book 2)". Drop every parenthetical and
 * compare only the base title.
 */
const stripSeries = (title) => norm(title.replace(/\([^)]*\)/g, " "));

/**
 * Accept a result only when the author genuinely matches and the title is not
 * a different book. Open Library happily returns neighbours otherwise.
 */
function pickMatch(docs, book) {
	const wantTitle = norm(searchTitle(book.title));
	const wantAuthor = lastNameOf(book.author);
	const isUnknown = /^unknown$/i.test(book.author.trim());

	for (const doc of docs) {
		if (!doc.cover_i) continue;

		// Compare accent-stripped on both sides, and allow known aliases.
		const rawAuthors = doc.author_name || [];
		const authors = rawAuthors.map((a) => norm(a));
		const aliases = AUTHOR_ALIASES[norm(book.author)] || [];
		const authorOk =
			isUnknown ||
			authors.some((a) => a.includes(wantAuthor)) ||
			rawAuthors.some((a) => aliases.includes(a));
		if (!authorOk) continue;

		const gotTitle = norm(doc.title || "");
		const gotBase = stripSeries(doc.title || "");
		const wantBase = stripSeries(book.title);
		const titleOk =
			gotTitle === wantTitle ||
			gotTitle.startsWith(wantTitle) ||
			wantTitle.startsWith(gotTitle) ||
			(wantBase.length > 3 && gotBase === wantBase);
		if (!titleOk) continue;

		return doc;
	}
	return null;
}

async function runSearch(params) {
	const url =
		"https://openlibrary.org/search.json?" +
		new URLSearchParams({
			...params,
			limit: "8",
			fields: "title,author_name,cover_i,first_publish_year",
		});

	const res = await fetch(url, {
		headers: { "User-Agent": "book-reviews-site/1.0 (personal project)" },
	});
	if (!res.ok) throw new Error(`search HTTP ${res.status}`);
	const data = await res.json();
	return data.docs || [];
}

async function search(book) {
	// The structured author field is picky about punctuation: "S.J. Sindu"
	// finds nothing where a free-text query finds the book. Try strict first,
	// then fall back, keeping the same match checks on both.
	const strict = await runSearch({
		title: searchTitle(book.title),
		author: book.author,
	});
	const hit = pickMatch(strict, book);
	if (hit) return hit;

	await sleep(250);
	const loose = await runSearch({
		q: `${searchTitle(book.title)} ${book.author}`,
	});
	return pickMatch(loose, book);
}

async function download(coverId, dest) {
	const url = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
	const res = await fetch(url, {
		headers: { "User-Agent": "book-reviews-site/1.0 (personal project)" },
	});
	if (!res.ok) throw new Error(`cover HTTP ${res.status}`);
	const buf = Buffer.from(await res.arrayBuffer());
	// Open Library serves a tiny 1x1 or blank placeholder when it has no art.
	if (buf.length < 3000) throw new Error(`placeholder image (${buf.length}B)`);
	await writeFile(dest, buf);
	return buf.length;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const main = async () => {
	const src = await readFile(SOURCE, "utf8");
	const books = extractBooks(src);
	console.log(`Found ${books.length} books in ${SOURCE}\n`);

	if (!REPORT_ONLY) await mkdir(OUT_DIR, { recursive: true });

	const existing = new Set(
		REPORT_ONLY ? [] : await readdir(OUT_DIR).catch(() => []),
	);

	const manifest = {};
	const missing = [];
	let fetched = 0;
	let skipped = 0;

	for (const [i, book] of books.entries()) {
		const slug = slugify(book.title);
		const file = `${slug}.jpg`;
		const label = `[${String(i + 1).padStart(2)}/${books.length}] ${book.title.slice(0, 48)}`;

		if (existing.has(file)) {
			manifest[slug] = file;
			skipped++;
			console.log(`${label}  — already have it`);
			continue;
		}

		try {
			const doc = await search(book);
			if (!doc) {
				missing.push(book);
				console.log(`${label}  — NO MATCH`);
			} else if (REPORT_ONLY) {
				manifest[slug] = file;
				console.log(`${label}  -> ${doc.title} (cover ${doc.cover_i})`);
			} else {
				const bytes = await download(doc.cover_i, `${OUT_DIR}/${file}`);
				manifest[slug] = file;
				fetched++;
				console.log(`${label}  -> ${Math.round(bytes / 1024)}KB`);
			}
		} catch (err) {
			missing.push(book);
			console.log(`${label}  — FAILED: ${err.message}`);
		}

		await sleep(350); // be polite to a free API
	}

	if (!REPORT_ONLY) {
		await writeFile(
			`${OUT_DIR}/manifest.json`,
			JSON.stringify(manifest, null, "\t") + "\n",
		);
	}

	console.log(
		`\nDone. ${fetched} fetched, ${skipped} already present, ${missing.length} missing.`,
	);
	if (missing.length) {
		console.log("\nNo cover found for:");
		for (const b of missing) console.log(`  - ${b.title} — ${b.author}`);
	}
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
