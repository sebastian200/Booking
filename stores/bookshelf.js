import { defineStore } from "pinia"

export const useBookShelfStore = defineStore("bookshelf", {
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
    
    init() {

    },

    setBooks(newBooks) {
      this.listOfBooks.push(newBooks);
    },

    setListOfBooks (newListOfBooks) {
      this.listOfBooks = newListOfBooks;
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
