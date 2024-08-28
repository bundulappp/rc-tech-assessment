export class User {
  constructor() {
    this.books = [];
  }

  borrow(book, library) {
    const matchingBook = library.books.find(
      (libBook) => libBook.name === book.name
    );
    if (!matchingBook) {
      return "The book is not found!";
    }
    this.books.push(matchingBook);
    library.removeBook(matchingBook);
  }

  hasBook(book) {
    const matchingBook = this.books.find(
      (libBook) => libBook.name === book.name
    );

    if (!matchingBook) {
      return false;
    }
    return true;
  }

  return(book, library) {
    const matchingBook = this.books.find(
      (libBook) => libBook.name === book.name
    );

    if (!matchingBook) {
      return false;
    }

    this.books = this.books.filter(
      (borrowedBook) => borrowedBook.name !== book.name
    );
    library.addBook(book);

    return true;
  }

  getBookNames() {
    return this.books.map((book) => book.name);
  }
}
