/**
 * Read-only cover lookup. Prints a JSON array of
 * { title, author, slug, coverId } and writes nothing.
 *
 *   node scripts/lookup-covers.mjs
 */

import { readFile } from "node:fs/promises";

export function searchTitle(title) {
	return title
		.replace(/\s*\([^)]*#[^)]*\)\s*$/, "")
		.replace(/\s*\([^)]*\)\s*$/, "")
		.split(/\s*[:/]\s*/)[0]
		.trim();
}

export function slugify(title) {
	return title
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.slice(0, 60);
}

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

const lastNameOf = (author) => {
	const cleaned = author.replace(/\s+(Jr\.|Sr\.|III|II)$/i, "").trim();
	const parts = cleaned.split(/\s+/);
	return (parts[parts.length - 1] || "").toLowerCase();
};

const norm = (s) =>
	s
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, " ")
		.trim();

function pickMatch(docs, book) {
	const wantTitle = norm(searchTitle(book.title));
	const wantAuthor = lastNameOf(book.author);
	const isUnknown = /^unknown$/i.test(book.author.trim());

	for (const doc of docs) {
		if (!doc.cover_i) continue;
		const authors = (doc.author_name || []).map((a) => norm(a));
		if (!isUnknown && !authors.some((a) => a.includes(wantAuthor))) continue;
		const gotTitle = norm(doc.title || "");
		if (
			gotTitle === wantTitle ||
			gotTitle.startsWith(wantTitle) ||
			wantTitle.startsWith(gotTitle)
		) {
			return doc;
		}
	}
	return null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const main = async () => {
	const src = await readFile("src/data/reviews.ts", "utf8");
	const books = extractBooks(src);
	const out = [];

	for (const book of books) {
		let doc = null;
		let error = null;
		try {
			const url =
				"https://openlibrary.org/search.json?" +
				new URLSearchParams({
					title: searchTitle(book.title),
					author: book.author,
					limit: "8",
					fields: "title,author_name,cover_i",
				});
			const res = await fetch(url, {
				headers: {
					"User-Agent": "book-reviews-site/1.0 (personal project)",
				},
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			doc = pickMatch(data.docs || [], book);
		} catch (err) {
			error = err.message;
		}

		out.push({
			title: book.title,
			author: book.author,
			slug: slugify(book.title),
			matchedTitle: doc ? doc.title : null,
			coverId: doc ? doc.cover_i : null,
			error,
		});
		await sleep(300);
	}

	console.log(JSON.stringify(out, null, "\t"));
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
