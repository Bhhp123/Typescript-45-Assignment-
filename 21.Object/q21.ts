interface Book {
  title: string;
  author: string;
  publicationYear: number;
}

let book1: Book = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  publicationYear: 1960,
};

let book2: Book = {
  title: '1984',
  author: 'George Orwell',
  publicationYear: 1949,
};

let book3: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publicationYear: 1925,
};

console.log(book1);
console.log(book2);
console.log(book3);
