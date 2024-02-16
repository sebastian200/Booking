import { defineStore } from "pinia"

import Book from "../classes/Book.js"

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: []
  }),
  getters: {
    /*
     * 
     */
    getBooks() {
      return this.books.map(book => {
        return Book.fromJSON(book)
      })
    }
  },
  actions: {
    /*
     * 
     */
    getBook(hash) {
      for(let book of this.getBooks) {
        if(book?.getHash() === hash) {
          return book
        }
      }
      return null
    },
    /*
     * Params:
     * - book | the book to add
     *
     * Returns:
     * - true  | the book was successfully added
     * - false | something went wrong
     */
    addBook(book) {
      let hash = book.getHash()

      for(let current of this.getBooks) {
        if(current.getHash() === hash) {
          return false
        }
      }
      this.books.push(book.toJSON())

      return true
    },
    /*
     * 
     */
    removeBook(hash) {
      for(const [index, book] of this.getBooks.entries()) {
        if(book.getHash() === hash) {
          this.books.splice(index, 1)
          return true
        }
      }
      return false
    },
    /*
     * 
     */
    toJSON() {
      return {
        books: this.books
      }
    },
    /*
     * Params
     * - json | the json object to deserialize
     */
    fromJSON(json) {
      try {
        this.books = json.books
      }
      catch(error) {
        console.log(error)
      }
    }
  }
})
