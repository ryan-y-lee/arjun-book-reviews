export interface Review {
	title: string;
	author: string;
	genres: string[];
	date: string;
	stars: number;
	text: string;
}

/**
 * Arjun's reviews. `stars: 0` means unrated, and an empty `text` renders
 * as a quiet "No written review" note. A book can carry several genres and
 * will appear under each one in the filter.
 */
export const reviews: Review[] = [
	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		genres: ["Classics", "Fiction", "Philosophy"],
		date: "2024-09-08",
		stars: 5,
		text: "",
	},
	{
		title: "The Sirens of Titan",
		author: "Kurt Vonnegut Jr.",
		genres: ["Science Fiction", "Classics"],
		date: "2024-09-08",
		stars: 5,
		text: "",
	},
	{
		title: "Dubliners",
		author: "James Joyce",
		genres: ["Classics", "Short Stories"],
		date: "2024-09-08",
		stars: 4,
		text: "",
	},
	{
		title: "Watership Down (Watership Down, #1)",
		author: "Richard Adams",
		genres: ["Fantasy", "Classics"],
		date: "2024-07-18",
		stars: 5,
		text: "Big fan of rabbits",
	},
	{
		title:
			"The Tao of Physics: An Exploration of the Parallels between Modern Physics and Eastern Mysticism",
		author: "Fritjof Capra",
		genres: ["Science", "Philosophy", "Nonfiction"],
		date: "2024-06-30",
		stars: 4,
		text: "Pretty good",
	},
	{
		title: "Paradise Lost",
		author: "John Milton",
		genres: ["Poetry", "Classics"],
		date: "2024-06-30",
		stars: 4,
		text: "Did a really great job at describing creation (of Earth, the heavens, and hell) and making characters and dramatic dialogue. Also great at describing massive scenes of battle, heavenly spheres, lush landscapes, and the scope of history. Despite all these large scenes there were very intimate and often tragic ones too with our first two humans and also the monologues of satan. End was somewhat misogynistic though but poem as a whole is worth reading for everything else",
	},
	{
		title: "The Sacred Depths of Nature",
		author: "Ursula Goodenough",
		genres: ["Science", "Nonfiction", "Philosophy"],
		date: "2023-12-14",
		stars: 4,
		text: `pretty good finished in 1 sitting
i will warn you if you already know a lot about biology this book will probably all be review through a slightly new lens

anyways i really liked the start's focus on how molecular biology is very sacred
specifically the meditations on the molecular language that calls itself into being and cell differentiation that creates a "self" were very up my alley
the end was more about ecology which is fine but not really my thing`,
	},
	{
		title: "The Wall",
		author: "Jean-Paul Sartre",
		genres: ["Philosophy", "Short Stories", "Fiction"],
		date: "2023-12-04",
		stars: 4,
		text: "L mans",
	},
	{
		title: "The Origin of Consciousness in the Breakdown of the Bicameral Mind",
		author: "Julian Jaynes",
		genres: ["Philosophy", "Science", "Nonfiction"],
		date: "2023-12-02",
		stars: 5,
		text: "I fully believe he is right",
	},
	{
		title: "The Gods Themselves",
		author: "Isaac Asimov",
		genres: ["Science Fiction", "Science"],
		date: "2023-08-13",
		stars: 4,
		text: `Book was actually pretty good
I liked how based on one fictional idea (that there is a parallel universe where the strong nuclear force is 100 times stronger) Asimov was able to create a whole story that worked really well
the characters were interesting enough and i really liked the first and third sections
it was like an interesting commentary on the scientific method and the problems with that mentality
although lowkey the middle third of the book was a little wack (it involves alien marital issues) (not joking)`,
	},
	{
		title: "How High We Go in the Dark",
		author: "Sequoia Nagamatsu",
		genres: ["Science Fiction", "Fiction"],
		date: "2023-08-13",
		stars: 3,
		text: "",
	},
	{
		title: "Gödel, Escher, Bach: An Eternal Golden Braid",
		author: "Douglas R. Hofstadter",
		genres: ["Philosophy", "Science", "Nonfiction"],
		date: "2023-08-08",
		stars: 5,
		text: `this is one of my favorite books i ever read

if you're interested in psychology, math reasoning, particle physics, molecular biology, metaphysics, zen buddhism, universal languages, music, modern art, the mind-body problem, computer science, fairy tales with deeper meanings, fractals, or the divine spark, you'll like this book

in reading this book i realized a lot of the areas that i'm interested in are actually connected at a fundamental level which was shocking to say the least
this book was NOT what i expected it was far more interesting

the book is made up of fables that can be pretty funny or at least interesting
and following each fable is a much longer chapter about an idea that was introduced in the fable
the different chapters build on each other to assemble a larger idea (i'm not gonna spoil it 🤔🤔)
but the book is FULL of really clever lines that refer to themselves
even though the ideas end up being very complex they're built up gradually in a way that is easy to understand

long story short if you like reading books that almost seem to jump out of their own pages this is one for you

not gonna keep yapping because CERTAIN PEOPLE called me a nerd and that is a terrible look`,
	},
	{
		title: "Sarrasine",
		author: "Honoré de Balzac",
		genres: ["Classics", "Short Stories"],
		date: "2023-08-04",
		stars: 3,
		text: `Today I was deleting hundreds of tabs on my computer because I always forget to and stumbled upon one tab that had the translation of this book on it
I have no memory of how it got there but I said screw it and read the whole thing
Pretty weird story but the descriptions were good i suppose`,
	},
	{
		title: "A History of Western Philosophy",
		author: "Bertrand Russell",
		genres: ["Philosophy", "History", "Nonfiction"],
		date: "2023-08-03",
		stars: 5,
		text: `BRO this book was crazy long like 900 pages😭😭but i'm very glad i got thru it

personally i think bertrand russell did a really good job at connecting a philosophers ideas to their own culture (time and place) AND to past and future philosophers cuz we pretty much track all of western thought up to his present day

at first it was a little difficult to get into the book cuz i used to think that the greek philosophers were SO dry and boring
but lowkey they bring up some interesting points and more importantly they (especially Plato and Aristotle) lay the foundation for the rest of western thought
my favorite was prolly pythagoras tho😁😁
then we move into catholic philosophy which offered some very interesting thoughts on properties of God
(although i did think anslems ontological proof was kinda dumb)
it was great learning about different saints as well like st augustine and the establishment of different orders like the franciscan order
at certain points it was just staggering to see HOW MUCH HISTORY there was to explore
and i'm not even much of a history guy
finally we got to my favorite part which was the "modern" era starting with the renaissance
pretty much every chapter here was a banger and the author did a great job describing the history too (which i really didn't know much about before cuz i have like no background of european history)
another thing i really liked here was the way the author traced how different schools of thought evolved thru hundreds of years
i should mention he was writing DURING WWII
so he traced how the schools of thought eventually ended with hitler stalin roosevelt and churchill
and it was just crazy to see how these trajectories of thought could be traced back

more specifically if you're interested there used to be just one school of liberalism but it split in certain ways hundreds of years ago that eventually led to the OPPOSITE parties in world war 2
like descartes, kant, rousseau and the romantics, hegel, nietszche's hero-worship, Satanism, and Lord Byron lead to hitler,
locke and kant led to bentham, the rationalistic revolt and utilitarianism which led to marx and stalin
locke kinda stayed as is and didn't develop much in America
and other capitalist countries also descended from locke
as the author says: "until rousseau, the philosophical world had a certain unity. this has disappeared for the time being, but perhaps not for long"

also i liked how the author tracked the progress of science alongside philosophy cuz the two are SO connected
first ofc it was physics of the celestial spheres and mechanics in general
as well as chemistry of a sort
then biology with the theory of evolution
then psychology
and the author even dips his toes in quantum physics (although he mentions that a suitable philosophical text addressing quantum physics hasn't yet been written)
i think the currents of thought even go backwards rather than forwards at times cuz it's arguable that hume was the END but like the guys after him kinda just ignored what he found out

from what i can tell there's at least 5 different branches of philosophy: epistemology, metaphysics, ethics, ontology, and political philosophy
and i think it's so interesting how they interact
but i could talk about that all day

anyways i do think people complain that the author is a little biased and while that's true the poor guy was writing IN THE MIDDLE OF WWII
so no wonder he heavily criticized the super authoritarian and crazy philosophies
also bro was lowkey funny he had some good one liners
it kinda felt like this chill professor was leading me thru all the philosophies
anyways that's all
i need to go read a beach book now or something`,
	},
	{
		title: "Daphnis and Chloe",
		author: "Longus",
		genres: ["Classics", "Romance", "Fiction"],
		date: "2023-07-22",
		stars: 4,
		text: `alright for being possibly the first romance novel it was pretty cute
long story short the genre hasn't changed much in 2000 years we've always been this way
both of our main characters are quite naïve and don't know the first thing about what's happening to them
but who can blame them they're teenagers 🤷🏾‍♂️
throughout the book they're trying to navigate these confusing feelings and they have absolutely no reference to help them except goats and sheep 😭😭 poor guys

i will say this book also got a decent plot with twists and everything
although i will say there are some parts which are a bit weird and some which are CRAZY
i liked the descriptions of nature and the seasons passing too bc of course everything was thru the lens of this romance
pastoral life for the win 😎😎

here's a quote from the book from Chloe's perspective:
"Sometimes, when she was quite alone, she talked to herself in the following strain:
"I am ill, but I do not know the nature of my illness: I feel pain, but am not wounded: I am sad, but I have lost none of my sheep. I am burning, although seated in the shade. The brambles have often tor my flesh, but I did not weep: the bees have often stung me, but I ate my food. The evil which now gnaws my heart must be sharper than all those. Daphnis is beautiful, but so are the flowers: his pipe gives forth sweet notes, but so do the nightingales: but yet I care not for them. Would that I were his pipe, that I might receive his breath! Would that I were one of his goats, that I might be tended by him!"`,
	},
	{
		title: "The Alchemist",
		author: "Paulo Coelho",
		genres: ["Fiction", "Philosophy"],
		date: "2023-07-20",
		stars: 4,
		text: `Listen i think a lot of people complain that this book is pretty basic and lacks nuance
and that's KINDA true but it's still decent
as a story it kept me interested and i appreciated the reference to the emerald tablet
(there's so much interesting historical stuff having to do with hermes trismegistus, the creator of the tablet, but that's a tangent for another day)
book made me feel more happy and content and that's all you can ask for right
maybe i need to become a shepherd and live the pastoral life`,
	},
	{
		title: "Piranesi",
		author: "Susanna Clarke",
		genres: ["Fantasy", "Philosophy", "Mystery"],
		date: "2023-07-18",
		stars: 4,
		text: `Ok lowkey I liked this book more for the ideas it plays with than for the plot or characters themselves
but yea the plot is interesting i guess. sorta

Aight first of all Piranesi's House was very much reminiscent of plato's Theory of Forms
for those unfamiliar it's like the idea that there are "perfect" versions of all of the variations of objects we see
for example there is a perfect dog somewhere that contains the universal qualities found in every dog
or the perfect coffee cup or perfect whatever
now the interesting thing is that plato thought that not only was this world of Forms real, it was THE real world and the only one worth studying
nowadays of course people don't really believe that the World of Forms exists literally (other than in the case of mathematics but that's a whole nother tangent)
the point is piranesi's world CONTAINS the platonic Ideals as statues
save my bro he got transported into a philosophical construct 😭😭😭
no wonder bro struggles with epistemological questions the whole book😢😢
but if i discuss this more i will def get into spoilers

another interesting connection to me was with the method of loci (where my ap psych students at)
this is like a memory device where you imagine a familiar house or palace full of rooms and place something you gotta remember in each room
then when you need to remember you walk thru the house (mentally) and see the rooms
this def has interesting crossover with this book and especially the end but that's spoiler territory
so i'll leave this here`,
	},
	{
		title: "Cloud Cuckoo Land",
		author: "Anthony Doerr",
		genres: ["Fiction", "Historical Fiction", "Science Fiction"],
		date: "2023-07-03",
		stars: 5,
		text: `SO GOOD

Imma keep it real i tried to get into this book once before and only got a few pages in before i got distracted
but someone convinced me to pick it up again and i read the whole thing in like 2 sittings 😭
i thought the writing was great throughout the book but there were a few parts where i was genuinely moved because of the beauty
i've been reading the "history of western philosophy" (if you know you know) and i feel like that really put me in the right mindset especially for the constantinople parts (which were probably my favorite part of the book)
although i wouldn't call this a romance book, the romance that was included was really good (and kinda heartbreaking 💀)
i really can't find a fault with this book it definitely left an emotional impact
looking through other reviews some people said it has too little plot and too much description
and usually i hate books which do that but i don't feel like this book has that problem
i also think the book was cohesive and it was really cool seeing how the different stories ended up weaving together
anyways once you read the book you start seeing like so many connections between different parts of the text and i thought that was super cool
but that's all spoilery stuff`,
	},
	{
		title: "Slaughterhouse-Five",
		author: "Kurt Vonnegut Jr.",
		genres: ["Science Fiction", "Classics", "Historical Fiction"],
		date: "2023-06-11",
		stars: 5,
		text: `Really good book

the forward said it better than I could:
"we see ourselves as mere human beings, mortal animals utterly stripped of our pretensions.
Our crimes become both monumental and quotidian. Our grief and our destiny both inevitable.

This may sound cynical or nihilistic, but I would argue that this book is among the most humane works of art ever created. It is concerned with and dedicated to the alleviation and prevention of human suffering in the face of its inevitability, and I can think of no braver moral position to take than that one."`,
	},
	{
		title:
			"Fear and Loathing in Las Vegas: A Savage Journey to the Heart of the American Dream",
		author: "Hunter S. Thompson",
		genres: ["Fiction", "Classics"],
		date: "2023-06-07",
		stars: 3,
		text: "I doubt any of you would even like this book it's just a dude genuinely tweaking in hotel lobbies and fast cars",
	},
	{
		title: "Cat's Cradle",
		author: "Kurt Vonnegut Jr.",
		genres: ["Science Fiction", "Classics", "Philosophy"],
		date: "2023-05-30",
		stars: 5,
		text: `"Of all the words of mice and men, the saddest are, 'It might have been.'"

First of all I HIGHLY recommend just picking up this book without reading any reviews or the summary on the back
it turned out to be one of my favorite books i have read in a minute and it is a very fast read
plus they have the pdf online for free
this is not a tough book to read and the plot is very entertaining
even a little funny if you like humor that bites

ultimately this book was another foray into the post-WWII world of postmodernism and absurdism which i seem to have written quite a few reviews on as of late
the style is a bit reminiscent of both "the stranger" and its predecessor "the postman always rings twice"

the events of this book are very much absurd
the fictional religion of bokononism (which proposes the opposite in the novel: that the world is organized by common fate and everyone is constantly evolving towards divine purposes)
this book is full of very seductive ideas that may or may not be completely hollow so if that sounds like your thing you'll love it

"The only way I can feel the least bit important is to think of all the mud that didn't even get to sit up and look around."

we see a few characters become microcosms for their own time and in this way history and philosophy are inextricably linked
but hasn't that always been the case 🤷🏾‍♂️
we also see science philosophy and religion dovetail in devastating fashion (i don't wanna spoil any more than that but trust me it's spectacular)

"That's why she married him. She said his mind was tuned to the biggest music there was, the music of the stars."`,
	},
	{
		title: "The Glass Menagerie",
		author: "Tennessee Williams",
		genres: ["Drama", "Classics"],
		date: "2023-05-10",
		stars: 5,
		text: `man this play really toyed with my feelings
it's a real rollercoaster
it's kind of about memory and living in your own fantasy world and all sorts of things
also apparently the play is really closely related to Williams' own life
there's a heartbreaking connection between the glass unicorn and Williams' sister Rose who had a lobotomy
but look all that up when you finish the play i don't wanna put spoilers here
but trust me it makes the play so much sadder to know the story behind it

if you liked streetcar i think you'll like this one too 🫡`,
	},
	{
		title:
			"Veinte poemas de amor y una canción desesperada / Los versos del capitán",
		author: "Pablo Neruda",
		genres: ["Poetry", "Romance", "Classics"],
		date: "2023-05-06",
		stars: 5,
		text: `"Acogedora como un viejo camino.
Te pueblan ecos y voces nostálgicas.
Yo desperté y a veces emigran y huyen pajaros que dormían en tu alma."

(translated) "You gather things to you like an old road.
You are peopled with echoes and nostalgic voices.
I awoke and at times birds fled and migrated that had been sleeping in your soul."

this was really good
i read the original spanish but i had a translated version there too because there is so much rare vocab
so i highly recommend that to any readers who have a limited spanish vocabulary
english speakers can find a translated version too im sure 😁😁

pablo neruda was 19 when he wrote this it's crazy
and gabriel garcía marquez called him the greatest poem of the 20th century believe it or not
apparently the poems are based on two love affairs Neruda had with classmates ⁉️

the poems start out pretty intense and passionate but it's interesting to see that they get more and more detached and melancholy as it goes on
and the song of despair is very sad😭😭

"Ya me veo olvidado como estas viejas anclas.
Son más tristes los muelles cuando atraca la tarde.
Se fatiga mi vida inútilmente hambrienta.
Amo lo que no tengo. Estás tú tan distante."

"I see myself forgotten like those old anchors.
The piers sadden when the afternoon moors there.
My life grows tired, hungry to no purpose.
I love what I do not have. You are so far."`,
	},
	{
		title: "Death of a Salesman",
		author: "Arthur Miller",
		genres: ["Drama", "Classics"],
		date: "2023-05-06",
		stars: 5,
		text: `Devastating yet entirely unavoidable ending
The oscillation between an imaginary dream and unbearable reality erodes a man to nothing

a dreamlike work in the way the past forever haunts the present and our main character can't differentiate between what's real and what isn't
or maybe he doesn't want to 🤷🏾‍♂️

not a difficult read in terms of the language everyone talks pretty close to how people talk nowadays
though the play is from 1949`,
	},
	{
		title: "The Stranger",
		author: "Albert Camus",
		genres: ["Philosophy", "Classics", "Fiction"],
		date: "2023-05-05",
		stars: 5,
		text: `"But I was sure about me, about everything, surer than he could ever be, sure of my life and sure of the death I had waiting for me. Yes, that was all I had."

finished in one sitting
this book was really something
at first the writing seems like really really simple and it is
but at its core i guess this is a philosophical book and it ties really nicely to "the myth of sisyphus" also by camus
essentially in this story a man is struggling against the absurdity and meaninglessness of his world
and the really simple sentence structure does a very good job conveying his detached worldview

our main character is like a zombie in his own world
sometimes he made me laugh and i don't know why
just out of the strangeness of the story i guess

the last paragraphs of the book are such an interesting ending
but no more spoilers go read it yourself`,
	},
	{
		title: "El burlador de Sevilla",
		author: "Tirso de Molina",
		genres: ["Drama", "Classics"],
		date: "2023-05-05",
		stars: 4,
		text: `The opera was better sorry

Là ci darem la mano⁉️⁉️
Là mi dirai di sì🥰
Vedi, non è lontano😁
Partiam, ben mio, da qui🙏🏾🙏🏾`,
	},
	{
		title: "Children of Ruin (Children of Time, #2)",
		author: "Adrian Tchaikovsky",
		genres: ["Science Fiction"],
		date: "2023-05-05",
		stars: 4,
		text: "",
	},
	{
		title: "The Postman Always Rings Twice",
		author: "James M. Cain",
		genres: ["Fiction", "Mystery", "Classics"],
		date: "2023-05-04",
		stars: 4,
		text: `i feel like i can't rate this book 5 stars in good conscience 😭 but for 1930s fiction it definitely kept my attention
it's like a streetcar named desire if nobody was particularly likeable or forgivable
but if you wanna read a very dramatic and fast moving crime story this one's for you
there were so many points where i was audibly like WHAT⁉️⁉️ and some interesting quotes too`,
	},
	{
		title: "Sea of Tranquility",
		author: "Emily St. John Mandel",
		genres: ["Science Fiction", "Fiction"],
		date: "2023-04-02",
		stars: 5,
		text: `very dreamlike and strange
it was sci fi but it didn't really read like it
gave me a sense of nostalgia for some reason`,
	},
	{
		title: "The Epic of Gilgamesh",
		author: "Unknown",
		genres: ["Classics", "Poetry", "Fantasy"],
		date: "2023-03-21",
		stars: 5,
		text: `SOO COOL
it may be the oldest story in the world but it's still valid
gilgamesh legacy will live in forever🫡🫡🫡
super interesting to see how some ideas are eternal like the quest for immortality and how you can be bros with someone very different from you🤝
me n liam fr😁`,
	},
	{
		title: "The Anthropocene Reviewed: Essays on a Human-Centered Planet",
		author: "John Green",
		genres: ["Nonfiction", "Essays"],
		date: "2023-02-05",
		stars: 4,
		text: `I know certain individuals are gonna murder me over this but I only gave it 4 stars 😢
when the writing was good it was really good you feel me
like it was very profound and interesting and so on and so forth
only reason i gave it 4 stars is cuz some chapters were kinda mid
but THIS BOOK IS NOT BAD it is very good
i didn't really like many of john greens other books but this was great 😊`,
	},
	{
		title: "One Hundred Years of Solitude",
		author: "Gabriel García Márquez",
		genres: ["Classics", "Fiction", "Fantasy"],
		date: "2023-01-11",
		stars: 5,
		text: `FINALLY FINISHED
where do i begin dude this book was different
in the words of Márquez the book has "the wildest things with a completely natural tone of voice"
fun fact did you know the author read Kafka's metamorphosis 🪳which reinforced the idea of magical realism to him and he went on to write this one

Carlos Fuentes and Pablo Neruda called Márquez the best writer since Cervantes and it makes sense why

AP spanish lit is actually coming in handy homie was praised by a ton of the writers in that course😭😭

End of the book was deeply sad and disturbing but it was also unavoiadable. The atmosphere created by Márquez perfectly ties in with the themes of the story and honestly the writing is pretty lucid and easy to follow which is awesome

You gotta read this one man there aren't any dinosaurs in it but the human experience in its entirety is in it🤷🏾‍♂️

I HATE THE BANANA COMPANY 😡 ANGRY 😡 🤬🍌🤬`,
	},
	{
		title: "I'm Thinking of Ending Things",
		author: "Iain Reid",
		genres: ["Horror", "Thriller", "Mystery"],
		date: "2023-01-08",
		stars: 5,
		text: `Long story short this is what it's like visiting a white persons house 😱 👻
Another creepy book but this one I actually do recommend to you guys
The atmosphere is what really gets you it just builds and builds even tho the book isn't too long
The ending is confusing but I think I get it now🤙🏾
not what you'd expect at all`,
	},
	{
		title: "Negative Space",
		author: "B. R. Yeager",
		genres: ["Horror", "Fiction"],
		date: "2023-01-05",
		stars: 4,
		text: `BROOO i can't recommend this book to anybody😭😭
i never wanna read it again
it was just so bleak but the writing style was so good at conveying that
every sentence did its job well and the characters all seemed like real but deeply sad people
side note i was also reading 100 years of solitude at the same time and i got super creeped out when this book started referring to passages i had read hours ago in the other one
like it randomly started quoting from that book and i was like wait i just read those words 5 hours ago
but the whole magical realism thing totally made sense`,
	},
	{
		title: "Authority (Southern Reach, #2)",
		author: "Jeff VanderMeer",
		genres: ["Science Fiction", "Horror", "Mystery"],
		date: "2022-12-30",
		stars: 2,
		text: `Buddy gets an office job and starts tweaking
There are people in the walls
only in Florida bro`,
	},
	{
		title: "The Redemption of Time",
		author: "Baoshu",
		genres: ["Science Fiction"],
		date: "2022-12-29",
		stars: 4,
		text: `basically what happened in the book was 🚀🧠😫💀👽🛸🌎🧓🏻🧍🏻‍♂️🚪🌪️✨🌌😳💥

anyways it was surprisingly good like bro did a good job drawing from the other books and actually adding cool stuff to the plot
ending was Silly though`,
	},
	{
		title: "Annihilation (Southern Reach, #1)",
		author: "Jeff VanderMeer",
		genres: ["Science Fiction", "Horror", "Mystery"],
		date: "2022-12-29",
		stars: 4,
		text: `PUT SOME RESPECT ON BIOLOGIST NAME😤😤😤😤😤😤😤😤
only book that respects what they do 💯💯`,
	},
	{
		title: "Upgrade",
		author: "Blake Crouch",
		genres: ["Science Fiction", "Thriller"],
		date: "2022-12-29",
		stars: 3,
		text: "So much potential in the setup but they fumbled the bag😢😢",
	},
	{
		title: "The First to Die at the End (They Both Die at the End, #0)",
		author: "Adam Silvera",
		genres: ["Young Adult", "Fiction", "Romance"],
		date: "2022-12-29",
		stars: 3,
		text: `Would have given it 5 stars if they. included cool facts about Dinosaurs
They are so cool my favorite is the flying one`,
	},
	{
		title: "The Scarlet Letter",
		author: "Nathaniel Hawthorne",
		genres: ["Classics", "Historical Fiction"],
		date: "2022-11-30",
		stars: 3,
		text: "",
	},
	{
		title: "Edgedancer (The Stormlight Archive, #2.5)",
		author: "Brandon Sanderson",
		genres: ["Fantasy"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "Rhythm of War (The Stormlight Archive, #4)",
		author: "Brandon Sanderson",
		genres: ["Fantasy"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "Oathbringer (The Stormlight Archive, #3)",
		author: "Brandon Sanderson",
		genres: ["Fantasy"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "Words of Radiance (The Stormlight Archive, #2)",
		author: "Brandon Sanderson",
		genres: ["Fantasy"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "The Way of Kings (The Stormlight Archive, #1)",
		author: "Brandon Sanderson",
		genres: ["Fantasy"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "It's Kind of a Funny Story",
		author: "Ned Vizzini",
		genres: ["Young Adult", "Fiction"],
		date: "2022-08-09",
		stars: 3,
		text: "Mental health stuff was covered pretty well but there were some other parts that were wack. Product of its time i guess",
	},
	{
		title: "Be More Chill",
		author: "Ned Vizzini",
		genres: ["Young Adult", "Science Fiction"],
		date: "2022-08-09",
		stars: 3,
		text: "He should have been more chill",
	},
	{
		title: "Swan Song",
		author: "Robert McCammon",
		genres: ["Horror", "Science Fiction"],
		date: "2022-08-09",
		stars: 5,
		text: "",
	},
	{
		title: "Project Hail Mary",
		author: "Andy Weir",
		genres: ["Science Fiction"],
		date: "2022-08-09",
		stars: 4,
		text: "",
	},
	{
		title: "Lifespan: Why We Age—and Why We Don't Have To",
		author: "David Sinclair",
		genres: ["Science", "Nonfiction"],
		date: "2022-08-09",
		stars: 0,
		text: "",
	},
	{
		title: "If I Was Your Girl",
		author: "Meredith Russo",
		genres: ["Young Adult", "Fiction", "Romance"],
		date: "2022-08-04",
		stars: 4,
		text: "",
	},
	{
		title: "Crooked Kingdom (Six of Crows, #2)",
		author: "Leigh Bardugo",
		genres: ["Fantasy", "Young Adult"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "Six of Crows (Six of Crows, #1)",
		author: "Leigh Bardugo",
		genres: ["Fantasy", "Young Adult"],
		date: "2022-08-03",
		stars: 5,
		text: "",
	},
	{
		title: "The City of Mirrors (The Passage, #3)",
		author: "Justin Cronin",
		genres: ["Horror", "Science Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "The Twelve (The Passage, #2)",
		author: "Justin Cronin",
		genres: ["Horror", "Science Fiction"],
		date: "2022-08-03",
		stars: 0,
		text: "",
	},
	{
		title: "The Passage (The Passage, #1)",
		author: "Justin Cronin",
		genres: ["Horror", "Science Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "American Gods (American Gods, #1)",
		author: "Neil Gaiman",
		genres: ["Fantasy", "Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "Light from Uncommon Stars",
		author: "Ryka Aoki",
		genres: ["Science Fiction", "Fantasy", "Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: `Alien sub plot was a little weird but the rest was fire
Especially the classical violin went crazy`,
	},
	{
		title: "Blue Skinned Gods",
		author: "S.J. Sindu",
		genres: ["Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Book about a kid in a hindu religious cult situation who thinks he is 10th avatar of Vishnu. Very very interesting especially when he finally leaves his bubble",
	},
	{
		title: "Seveneves",
		author: "Neal Stephenson",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "You've Reached Sam (You've Reached Sam, #1)",
		author: "Dustin Thao",
		genres: ["Young Adult", "Romance", "Fantasy"],
		date: "2022-08-03",
		stars: 3,
		text: "Mid cause the writing wasn't very compelling even tho the setup of the plot was very interesting",
	},
	{
		title: "Song of Kali",
		author: "Dan Simmons",
		genres: ["Horror", "Thriller"],
		date: "2022-08-03",
		stars: 4,
		text: `Nah this book was wack lowkey
The horror was crazy and I couldn't put it down fr
Only thing was that they were too mean to Calcutta 😢😢`,
	},
	{
		title: "The Rise of Endymion (Hyperion Cantos, #4)",
		author: "Dan Simmons",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "Endymion (Hyperion Cantos, #3)",
		author: "Dan Simmons",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "The Fall of Hyperion (Hyperion Cantos, #2)",
		author: "Dan Simmons",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "",
	},
	{
		title: "Dry",
		author: "Neal Shusterman",
		genres: ["Young Adult", "Science Fiction", "Thriller"],
		date: "2022-08-03",
		stars: 5,
		text: "Book starts off pretty normal but quickly goes off the rails",
	},
	{
		title: "The Toll (Arc of a Scythe, #3)",
		author: "Neal Shusterman",
		genres: ["Young Adult", "Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "",
	},
	{
		title: "Thunderhead (Arc of a Scythe, #2)",
		author: "Neal Shusterman",
		genres: ["Young Adult", "Science Fiction"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "Scythe (Arc of a Scythe, #1)",
		author: "Neal Shusterman",
		genres: ["Young Adult", "Science Fiction"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "Roxy",
		author: "Neal Shusterman",
		genres: ["Young Adult", "Fiction", "Fantasy"],
		date: "2022-08-03",
		stars: 5,
		text: "Nah this book was wild fr. About two siblings whose lives change from drug addiction but the drugs are personified",
	},
	{
		title: "Exhalation",
		author: "Ted Chiang",
		genres: ["Science Fiction", "Short Stories"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title: "Stories of Your Life and Others",
		author: "Ted Chiang",
		genres: ["Science Fiction", "Short Stories"],
		date: "2022-08-03",
		stars: 5,
		text: "Hell is the absence of God is the craziest short story in this collection but they all good",
	},
	{
		title: "To Hold Up the Sky",
		author: "Cixin Liu",
		genres: ["Science Fiction", "Short Stories"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "The Wandering Earth",
		author: "Cixin Liu",
		genres: ["Science Fiction", "Short Stories"],
		date: "2022-08-03",
		stars: 5,
		text: "Didn't realize it was a collection at first very good book",
	},
	{
		title: "Supernova Era",
		author: "Cixin Liu",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "Death's End (Remembrance of Earth's Past, #3)",
		author: "Cixin Liu",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Great ending to an insane series",
	},
	{
		title: "The Dark Forest (Remembrance of Earth's Past, #2)",
		author: "Cixin Liu",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Must read for sci-fi fans (2nd book in series)",
	},
	{
		title: "The Stand",
		author: "Stephen King",
		genres: ["Horror", "Fantasy", "Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Nah this book was crazy. Big story",
	},
	{
		title: "The Metamorphosis",
		author: "Franz Kafka",
		genres: ["Classics", "Fiction", "Philosophy"],
		date: "2022-08-03",
		stars: 4,
		text: "Goofy",
	},
	{
		title: "Snow Crash",
		author: "Neal Stephenson",
		genres: ["Science Fiction", "Classics"],
		date: "2022-08-03",
		stars: 4,
		text: "Book was a wild ride and had very very cool ideas but uhhh read at your own risk",
	},
	{
		title: "Dune (Dune, #1)",
		author: "Frank Herbert",
		genres: ["Science Fiction", "Classics"],
		date: "2022-08-03",
		stars: 3,
		text: "",
	},
	{
		title: "Hyperion (Hyperion Cantos, #1)",
		author: "Dan Simmons",
		genres: ["Science Fiction", "Classics"],
		date: "2022-08-03",
		stars: 5,
		text: `Really good start to a decent series
Super cool ideas and ways they were connected but 3rd and 4th book get a little wordy`,
	},
	{
		title: "Recursion",
		author: "Blake Crouch",
		genres: ["Science Fiction", "Thriller"],
		date: "2022-08-03",
		stars: 5,
		text: "BROOO THIS BOOK WAS CRAZY. like so much crazier than the synopsis would have you believe",
	},
	{
		title: "The Three-Body Problem (Remembrance of Earth's Past, #1)",
		author: "Cixin Liu",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Best sci fi series for real whole series is goated I just don't wanna write review for all 3",
	},
	{
		title: "The Martian",
		author: "Andy Weir",
		genres: ["Science Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "",
	},
	{
		title: "The Book Thief",
		author: "Markus Zusak",
		genres: ["Historical Fiction", "Young Adult", "Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "Sad book 😢",
	},
	{
		title:
			"The Hitchhiker's Guide to the Galaxy (The Hitchhiker's Guide to the Galaxy, #1)",
		author: "Douglas Adams",
		genres: ["Science Fiction", "Classics", "Fantasy"],
		date: "2022-08-03",
		stars: 4,
		text: "",
	},
	{
		title:
			"Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
		author: "Terry Pratchett",
		genres: ["Fantasy", "Fiction"],
		date: "2022-08-03",
		stars: 5,
		text: "End of the world but Fun",
	},
];
