import { defineStore } from "pinia"

export const useBooksStore = defineStore("bookshelf", {
  state: () => ({
    listOfBooks: [],


  }),
  getters: {
    getListOfBooks() {
      return this.listOfBooks;
    }
  },
  actions: {
    // Execute code on initialization

    setBooks(newBooks) {
      this.listOfBooks.push(newBooks);
    },

    setListOfBooks (newListOfBooks) {
      this.listOfBooks = newListOfBooks;
    },

    init() {

    },
    filterBooks(title,){

    },
    SortBooks(type, reversed = false) {

    },
    addBooks(title) {

    },
    removeBooks(title) {

    },
  }
})
