function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id){
let booksFound = books.find((book) => book.id === id);
  return booksFound;
}

function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book)=> book.borrows.every((borrow)=> borrow.returned === true)
 );
  let booksBorrowed = books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false)
 );
  let finalBooks = [[...booksBorrowed], [...booksReturned]];
  return finalBooks;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.reduce((result, borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    if (account) {
      result.push({ ...borrow, ...account });
    }
    return result;
  }, []).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
