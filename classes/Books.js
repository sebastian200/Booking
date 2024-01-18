import Book from "./Book.js"

export default class Books {
  constructor({ book, amount }) {
    this.book = book
    this.totalAmount = amount
    this.availableAmount = amount
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
    return {

    }
  }

  static fromJSON(json) {
    let books = new Books()

    Object.assign(books, json)

    return books
  }
}
