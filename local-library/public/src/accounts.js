function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
 let sorted = accounts.sort((accountA, accountB) => 
  accountA.name.last > accountB.name.last ? 1 : -1)
  return sorted;
}

function countBorrowsForAccount(account, book) {
  return book.borrows.reduce((count, borrow) => {
    if (borrow.id === account.id) {
      return count + 1;
    }
    return count;
  }, 0);
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
    totalBorrows += countBorrowsForAccount(account, books[i]);
  }
  return totalBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  const inPossesion = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      authors.map((author) => {
   if (author.id === book.authorId) book["author"] = author;
});
   if (borrow.returned === false && borrow.id === account.id){
     inPossesion.push(book);
 }
});
});
  return inPossesion;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
