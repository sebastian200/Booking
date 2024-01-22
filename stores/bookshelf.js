import { defineStore } from "pinia"

import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

export const useBookshelfStore = defineStore("bookshelf", {
  state: () => ({
    books: [],
  }),
  getters: {
    getBooks() {
      return this.books.map(book => Book.fromJSON(book)) // convert to Book class object from json
    },

  },


  actions: {
    addBooks(book) {
      // For some reason, books can only contain POJOs
      this.books.push(book.toJSON())
    },
    removeBooks(title) {
      for (let i = 0; i < this.listOfBooks.length; i++) {
        if (this.listOfBooks[i].title === title) {
          this.listOfBooks.splice(i, 1); // remove the book
        }
      }
    },

    toJSON() { // convert to json
      return {
        books: this.books.map(book => book)
      }
    },
    fromJSON(json) { // convert from json
      try {
        json.books.map(book => this.books.push(book))
      }
      catch (error) {
        console.log("Could not deserialize json to books")
        // console.log(error)
      }
    },

    // If no filter is used, this equals getBooks

    setListOfBooks(newListOfBooks) {
      this.listOfBooks = newListOfBooks;
    },

    loadListOfBooks() {
      
    },

    saveListOfBooks() {

    },

    filterBooks(title = "", author = "", type = "", pages = 0, genres = [],) {
      let filteredBooks = this.listOfBooks;
      if (title !== "") {
        filteredBooks = filteredBooks.filter(book => book.title === title);
      }
      if (author !== "") {
        filteredBooks = filteredBooks.filter(book => book.author === author);
      }
      if (type !== "") {
        filteredBooks = filteredBooks.filter(book => book.type === type);
      }
      if (pages !== 0) {
        filteredBooks = filteredBooks.filter(book => book.pages >= pages);
      }
      if (genres.length !== 0) {
        filteredBooks = filteredBooks.filter(book => genres.includes(book.genre));
      }
      return filteredBooks;

    },
    SortBooks(type, reversed = false) {
      let sortedBooks = this.listOfBooks;
      if (type === "title") {
        sortedBooks.sort(function (a, b) {
          if (a.title < b.title) { return -1; }
          if (a.title > b.title) { return 1; }
          return 0;
        });
      }
      if (type === "author") {
        sortedBooks.sort(function (a, b) {
          if (a.author < b.author) { return -1; }
          if (a.author > b.author) { return 1; }
          return 0;
        });
      }
      if (type === "pages") {
        sortedBooks.sort(function (a, b) {
          if (a.pages < b.pages) { return -1; }
          if (a.pages > b.pages) { return 1; }
          return 0;
        });
      }
      if (type === "year") {
        // year is a number
        sortedBooks.sort(function (a, b) {
          return a.year - b.year;
        });
      }
    }
  },

})
