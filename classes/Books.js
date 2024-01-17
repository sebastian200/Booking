import Book from "./Book.js"

export default class Books {
  constructor(book, totalAmount) {
    this.book = book
    this.totalAmount = totalAmount
    this.availableAmount = totalAmount
  }

  getBook() {
    return this.book
  }

  getTotalAmount() {
    return this.totalAmount
  }

  getAvailableAmount() {
    return this.availableAmount
  }

  borrowBook() {

  }

  returnBook() {

  }

  addBook() {

  }

  removeBook() {

  }

  toJSON() {

  }

  fromJSON(json) {

  }
}
