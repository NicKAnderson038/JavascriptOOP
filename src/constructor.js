function Book(title, author, year) {
  // this.title = title;
  // this.author = author;
  // this.year = year;
  Object.assign(this, { title, author, year });
  this.combine = () => {
    return console.log(`${this.title} by ${this.author} in ${this.year}`);
  };
}
const book1 = new Book(
  "The Expance: Leviathan Wakes",
  "James S. A. Corey",
  "2011"
);
console.log(book1.combine());
