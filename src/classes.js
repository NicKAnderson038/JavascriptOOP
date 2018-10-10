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

const book1 = new Book("The Expance: Cibola Burn", "James S. A. Corey", "2014");
console.log(book1.combine());
