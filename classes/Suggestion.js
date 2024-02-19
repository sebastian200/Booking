import Book from "./Book.js"

import { useBooksStore } from "~/stores/books.js"

export default class Suggestion {
  constructor({ book }) {
    this.hash = book?.getHash()
    this.votes = 0

    if(book != null) {
      const books = useBooksStore()
      const { $books } = useNuxtApp()

      // Read the current books
      $books.read()
      .then(json => {
        books.fromJSON(json)

        books.addBook(book)

        $books.write(books.toJSON())
      })
      .catch(error => {
        console.log(error)
      })
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
    let suggestion = new Suggestion({})

    Object.assign(suggestion, json)

    return suggestion
  }
}
