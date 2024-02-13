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

  lend() {
    this.availableAmount--;
 
  }

  returnBook() {
    this.availableAmount++;
  }

  addBook() {
    this.totalAmount++;
  }

  removeBook() {
    this.totalAmount--;
  }

  toJSON() {
    return { ...this }
  }
  static fromJSON(json) {
    let books = new Books({})

    Object.assign(books, json)
    books.book = Book.fromJSON(json.book)

    return books
  }
}
