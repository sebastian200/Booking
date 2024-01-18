import Book from "./Book.js"

export default class Suggestion {
  constructor({ book }) {
    this.book = book
    this.votes = 0
  }

  getBook() {
    return this.book
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
    return {
      book: this.book.toJSON(),
      votes: this.votes
    }
  }

  static fromJSON(json) {
    let suggestion = new Suggestion()

    Object.assign(suggestion, json)

    return suggestion
  }
}
