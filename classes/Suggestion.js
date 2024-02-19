import Book from "./Book.js"

import { useBooksStore } from "~/stores/books.js"

export default class Suggestion {
  constructor() {
    this.hash = null // The book has not been initialized
    this.votes = 0
  }

  async init(book) {
    const books = useBooksStore()
    const { $books } = useNuxtApp()

    // Read the current books
    try {
      const json = await $books.read()
      books.fromJSON(json)

      books.addBook(book)

      await $books.write(books.toJSON())

      this.hash = book?.getHash()

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

  getVotes() {
    return this.votes
  }

  upvote() {
    this.votes++
  }

  downvote() {
    this.votes--
  }

  toJSON() {
    return { ...this }
  }

  static fromJSON(json) {
    let suggestion = new Suggestion()

    Object.assign(suggestion, json)

    return suggestion
  }
}
