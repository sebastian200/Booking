import Book from "./Book.js"

import { useBooksStore } from "~/stores/books.js"

export default class Books {
  constructor() {
    this.hash = null
    this.totalAmount = 0
    this.availableAmount = 0
  }

  async init(book, amount) {
    const books = useBooksStore()
    const { $books } = useNuxtApp()

    // Read the current books
    try {
      const json = await $books.read()
      books.fromJSON(json)

      books.addBook(book)

      await $books.write(books.toJSON())

      this.hash = book?.getHash()
      this.totalAmount = amount
      this.availableAmount = amount

      return true
    }
    catch (error) {
      console.log(error)
    }
  }

  getBook() {
    const books = useBooksStore()

    return books.getBook(this.hash)
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
    let books = new Books()

    Object.assign(books, json)

    return books
  }
}
