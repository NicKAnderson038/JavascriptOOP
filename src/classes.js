class Book {
  static number() {
    return 10;
  }
  constructor(title, author, year) {
    Object.assign(this, { title, author, year });
  }
  combine() {
    return console.log(`${this.title} by ${this.author} in ${this.year}`);
  }
  static topBookStore() {
    return "Barns & Noble";
  }
}

const book1 = new Book("The Expance: Cibola Burn", "James S. A. Corey", "2014");
console.log(book1.combine());

// static objects can be ran on the class only.
console.log(Book.topBookStore());
