import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  genres = ['Fiction', 'Non-fiction', 'Drama', 'Self Help', 'Adventure', 'Quest', 'Self Development', 'Romance', 'Thriller', 'Mystery', 'Philosophy'];

  bookSummaryData = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      shortDesc: "A classic tale of racism, injustice, and coming-of-age in the Deep South.",
      category: ["Fiction","Drama"],
      coverImg: "https://imgs.search.brave.com/VBsynO934rrPo8aJbk9IogmHYSkoRHXUAqnpDn6jDz4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4y/LnBlbmd1aW4uY29t/LmF1L2NvdmVycy9v/cmlnaW5hbC85Nzgx/Nzg0NzUyNjM3Lmpw/Zw",
      price: 10.99
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      shortDesc: "A mystical journey of self-discovery and personal legend.",
      category: ["Fiction", "Self Help" ,"Adventure", "Quest"],
      coverImg: "https://imgs.search.brave.com/z8xOVwQnUde1WM8hXrRvGEktazcYs3dYt7GSlXVRISU/rs:fit:989:1200:1/g:ce/aHR0cHM6Ly9hdDJi/b29rcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDUv/VGhlLUFsY2hlbWlz/dC5qcGc",
      price: 12.99
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      shortDesc: "Learn how to build good habits and break bad ones with this practical guide.",
      category: ["Non-fiction", "Self Development"],
      coverImg: "https://images-us.bookshop.org/ingram/9780735211292.jpg?height=500&v=v2-6f5ec5995cc02aae02f42dc75e235cd5",
      price: 14.99
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      shortDesc: "A dazzling tale of wealth, love, and betrayal in the Jazz Age.",
      category: ["Fiction","Romance"],
      coverImg: "https://imgs.search.brave.com/ri9va_KT2xRqnaKEZVQ8TNnOv2PmXU9xxpTbz_hVs6I/rs:fit:379:600:1/g:ce/aHR0cHM6Ly9iaWxk/ZXIuYnVlY2hlci5k/ZS9wcm9kdWt0ZS81/NC81NDQyMC81NDQy/MDk2OXouanBn",
      price: 9.99
    },
    {
      id: 5,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      shortDesc: "Discover the secrets to financial success and personal achievement.",
      category: ["Non-fiction", "Self Development"],
      coverImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg",
      price: 11.99
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      shortDesc: "A controversial coming-of-age novel that has become a classic of modern American literature.",
      category: ["Fiction"],
      coverImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
      price: 8.99
    },
    {
      id: 7,
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      shortDesc: "How to communicate effectively, How to make people like you, How to increase your ability to get things done",
      category: ["Non-fiction", "Self Development"],
      coverImg: "https://images-us.bookshop.org/ingram/9780671027032.jpg?height=500&v=v2-3fcdb096928b7c4f79e21dbeaecccef8",
      price: 24
    },
    {
      id: 8,
      title: "The Boys from Biloxi",
      author: "John Grisham",
      shortDesc: "Two childhood friends follow in their fathers' footsteps, which puts them on opposite sides of the law.",
      category: ["Fiction", "Thriller", "Mystery"],
      coverImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657114588i/61065355.jpg",
      price: 22.69
    },
    {
      id: 9,
      title: "The Boy, the Mole, the Fox and the Horse",
      author: "Charlie Mackesy",
      shortDesc: "Enter the world of Charlie's four unlikely friends, discover their story and their most important life lessons.",
      category: ["Fiction", "Self Help", "Mystery", "Philosophy"],
      coverImg: "https://images-us.bookshop.org/ingram/9780062976581.jpg?height=500&v=v2",
      price: 21.4
    },
    {
      id: 10,
      title: "Ikigai",
      author: "Héctor García, Francesc Miralles",
      shortDesc: "According to the Japanese, everyone has an ikigai--a reason for living. And according to the residents of the Japanese village with the world's longest-living people, finding it is the key to a happier and longer life.",
      category: ["Non-fiction", "Self Help", "Self Development"],
      coverImg: "https://images-us.bookshop.org/ingram/9780143130727.jpg?height=500&v=v2",
      price: 21.4
    },
    {
      id: 11,
      title: "Dreamland",
      author: "Nicholas Sparks",
      shortDesc: "After fleeing an abusive husband with her six-year-old son, Tommie, Beverly is attempting to create a new life for them in a small town off the beaten track. Despite their newfound freedom, Beverly is constantly on guard.",
      category: ["Fiction", "Romance", "Drama"],
      coverImg: "https://images-us.bookshop.org/ingram/9780593449554.jpg?height=500&v=v2-48f4967dad4b96b8dc81e9c9b45af5b6",
      price: 26.96
    },
    {
      id: 12,
      title: "The Client",
      author: "John Grisham",
      shortDesc: "Eleven-year-old Mark Sway and his younger brother were sharing a forbidden cigarette when a chance encounter with a suicidal lawyer left Mark knowing a bloody and explosive secret: the whereabouts of the most sought-after dead body in America.",
      category: ["Fiction", "Thriller", "Crime", "Mystery"],
      coverImg: "https://imgs.search.brave.com/gd5piXZCppUwmM1Vy8_3kFKKv5cHGjzYv0XwsBdSSgQ/rs:fit:736:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9lMC80Yy8xYi9l/MDRjMWI2NmJmYWEy/M2E0MzY5OGU4Y2I1/NjU1MGNjNi0tam9o/bi1ncmlzaGFtLXRo/ZS1jbGllbnQuanBn",
      price: 35
    },
    {
      id: 13,
      title: "The Nyxia",
      author: "Scott Reintgen",
      shortDesc: "Emmett Atwater isn’t just leaving Detroit; he’s leaving Earth. Why the Babel Corporation recruited him is a mystery, but the number of zeroes on their contract has him boarding their lightship and hoping to return to Earth with enough money to take care of his family.",
      category: ["Fiction", "Science Fiction", "Fantasy", "Thriller"],
      coverImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485432778i/27426044.jpg",
      price: 10
    },
    {
      id: 14,
      title: "Out of the Dark",
      author: "Gregg Hurwitz",
      shortDesc: "Evan Smoak was taken from a group home at age twelve and raised and trained as part of the Orphan Program, an off-the-books operation designed to create deniable intelligence assets: assassins. Evan was Orphan X.",
      category: ["Fiction", "Crime", "Thriller"],
      coverImg: "https://images-us.bookshop.org/ingram/9781250120434.jpg?height=500&v=v2-70f59f0cb407770c8e645b1934699c29",
      price: 24
    },
    {
      id: 15,
      title: "Ugly Love",
      author: "Colleen Hoover",
      shortDesc: "When Tate Collins meets airline pilot Miles Archer, she knows it isn’t love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction.",
      category: ["Fiction", "Romance"],
      coverImg: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632597571i/17788401.jpg",
      price: 24
    }
  ]
  
  trendingBookIds = [8, 9, 3];
  todaysUnchartedIds = [11,12,13];
  trendingBooks = this.bookSummaryData.filter(book => this.trendingBookIds.includes(book.id));
  todaysUncharted = this.bookSummaryData.filter(book => this.todaysUnchartedIds.includes(book.id));

  bookDetailsData = [
    {
    id: 1,
    publisher: "HarperCollins",
    publishingDate: new Date("2002-05-23"),
    pages: 281,
    fullDesc: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is a classic of modern American literature and won the Pulitzer Prize. The novel takes place in Maycomb, Alabama, during the Great Depression, and follows the journey of Scout Finch, a young girl coming of age and learning about racism, injustice, and human nature."
    },
    {
    id: 2,
    publisher: "HarperOne",
    publishingDate: new Date("2014-04-15"),
    pages: 208,
    fullDesc: "The Alchemist is a novel by Paulo Coelho first published in 1988. It tells the story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His journey leads him to meet a series of interesting characters and learn valuable life lessons."
    },
    {
    id: 3,
    publisher: "Avery",
    publishingDate: new Date("2018-10-16"),
    pages: 320,
    fullDesc: "Atomic Habits is a Self Help book by James Clear published in 2018. It provides a step-by-step guide on how to build good habits and break bad ones. The book emphasizes the importance of making small changes that compound over time to achieve significant results."
    },
    {
    id: 4,
    publisher: "Scribner",
    publishingDate: new Date("2004-09-30"),
    pages: 180,
    fullDesc: "The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. The story takes place in the summer of 1922 and follows the life of Jay Gatsby, a young millionaire who throws extravagant parties in the hope of winning back his lost love, Daisy Buchanan. The novel explores themes of wealth, love, and betrayal in the Jazz Age."
    },
    {
    id: 5,
    publisher: "Napoleon Hill Foundation",
    publishingDate: new Date("2016-04-12"),
    pages: 238,
    fullDesc: "Think and Grow Rich is a Self Help book by Napoleon Hill published in 1937. It is a personal development and self-improvement book that emphasizes the importance of positive thinking, persistence, and taking action. The book provides a blueprint for achieving financial success and personal achievement."
    },
    {
    id: 6,
    publisher: "Little, Brown and Company",
    publishingDate: new Date("1951-07-16"),
    pages: 277,
    fullDesc: "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. It is a coming-of-age story that follows the journey of Holden Caulfield, a teenage boy who has been expelled from his prep school. The novel explores themes of innocence, alienation, and the loss of childhood innocence."
    },
    {
    id: 7,
    publisher: "Gallery Books",
    publishingDate: new Date("1998-10-01"),
    pages: 320,
    fullDesc: "One of the best-known motivational guides in history, Dale Carnegie's groundbreaking book has sold tens of millions of copies, been translated into almost every known language, and has helped countless people succeed. Originally published during the depths of the Great Depression--and equally valuable during booming economies or hard times--Carnegie's rock-solid, time-tested advice has carried countless people up the ladder of success in their professional and personal lives."
    },
    {
      id: 8,
      publisher: "Doubleday Books",
      publishingDate: new Date("2022-10-18"),
      pages: 464,
      fullDesc: "Keith Rudy and Hugh Malco grew up in Biloxi in the sixties and were childhood friends, as well as Little League all-stars. But as teenagers, their lives took them in different directions. Keith's father became a legendary prosecutor, determined to \"clean up the Coast.\" Hugh's father became the \"Boss\" of Biloxi's criminal underground."
    },
    {
      id: 9,
      publisher: "HarperOne",
      publishingDate: new Date("2019-10-22"),
      pages: 128,
      fullDesc: "Charlie Mackesy offers inspiration and hope in uncertain times in this beautiful book, following the tale of a curious boy, a greedy mole, a wary fox and a wise horse who find themselves together in sometimes difficult terrain, sharing their greatest fears and biggest discoveries about vulnerability, kindness, hope, friendship and love."
    },
    {
      id: 10,
      publisher: "Penguin Life",
      publishingDate: new Date("2017-08-22"),
      pages: 208,
      fullDesc: "According to the Japanese, everyone has an ikigai--a reason for living. And according to the residents of the Japanese village with the world's longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai--where what you love, what you're good at, what you can get paid for, and what the world needs all overlap--means that each day is infused with meaning. It's the reason we get up in the morning."
    },
    {
      id: 11,
      publisher: "Random House",
      publishingDate: new Date("2022-09-20"),
      pages: 384,
      fullDesc: "After fleeing an abusive husband with her six-year-old son, Tommie, Beverly is attempting to create a new life for them in a small town off the beaten track. Despite their newfound freedom, Beverly is constantly on guard: she creates a fake backstory, wears a disguise around town, and buries herself in DIY projects to stave off anxiety. But her stress only rises when Tommie insists he'd been hearing someone walking on the roof and calling his name late at night."
    },
    {
      id: 12,
      publisher: "Anchor Books",
      publishingDate: new Date("2011-12-27"),
      pages: 576,
      fullDesc: "Eleven-year-old Mark Sway and his younger brother were sharing a forbidden cigarette when a chance encounter with a suicidal lawyer left Mark knowing a bloody and explosive secret: the whereabouts of the most sought-after dead body in America. Now Mark is caught between a legal system gone mad and a mob killer desperate to cover up his crime. And his only ally is a woman named Reggie Love, who has been a lawyer for all of four years."
    },
    {
      id: 13,
      publisher: "Crown Books",
      publishingDate: new Date("2017-09-12"),
      pages: 384,
      fullDesc: "Emmett Atwater isn’t just leaving Detroit; he’s leaving Earth. Why the Babel Corporation recruited him is a mystery, but the number of zeroes on their contract has him boarding their lightship and hoping to return to Earth with enough money to take care of his family. Before long, Emmett discovers that he is one of ten recruits, all of whom have troubled pasts and are a long way from home. Now each recruit must earn the right to travel down to the planet of Eden—a planet that Babel has kept hidden"
    },
    {
        id: 14,
        publisher: "St. Martin's Press",
        publishingDate: new Date("2019-11-26"),
        pages: 480,
        fullDesc: "Evan Smoak was taken from a group home at age twelve and raised and trained as part of the Orphan Program, an off-the-books operation designed to create deniable intelligence assets: assassins. Evan was Orphan X. But he broke with the Program, using everything he learned to disappear and reinvent himself as the Nowhere Man, someone who could help the truly desperate when all hope was lost. But now Evan's past is catching up to him--and there's no one left to rescue but himself."
      },
      {
        id: 15,
        publisher: "St. Martin's Press",
        publishingDate: new Date("2014-08-05  "),
        pages: 333,
        fullDesc: "When Tate Collins meets airline pilot Miles Archer, she knows it isn’t love at first sight. They wouldn’t even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realize they have the perfect set-up. He doesn’t want love, she doesn’t have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her."
      }
    ]



  constructor() { }
}
