class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  combine() {
    return console.log(`${this.title} by ${this.author} in ${this.year}`);
  }
}

const book1 = new Book(
  "The Expance: Persepolis Rising",
  "James S. A. Corey",
  "2017"
);
console.log(book1.combine());

// Subclasses - react style
class TVshow extends Book {
  constructor(title, author, year, season) {
    super(title, author, year);
    this.season = season;
  }
  combine() {
    return console.log(
      `${this.title} by ${this.author}, season ${this.season} in ${this.year}`
    );
  }
}

// Instantiate TVshow
const tv1 = new TVshow("The Expance", "James S. A. Corey", "2017", 1);

console.log(tv1.combine());
