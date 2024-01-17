import { defineStore } from "pinia"

import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

export const useBookshelfStore = defineStore("bookshelf", {
  state: () => ({
    books: [],
  }),
  getters: {
    // If no filter is used, this equals getBooks
    filterBooks(){

    },
    sortBooks() {

    }
  },
  actions: {
    addBooks() {

    },
    removeBooks() {

    },
    toJSON() {

    },
    fromJSON(json) {
      
    }
  }
})
