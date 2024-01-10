import { defineStore } from "pinia"

export const useBookStore = defineStore("book", {
  state: () => ({
    title: "Harry Potter",
    author: "",
    pages: 0,
    format: "",
    year: 0,
    genres: [],
  }),
  getters: {

    getTitle() {
      return this.title;
    },
    getAuthor() {
      return this.author;
    },
    getPages(){

    },
    getFormat() {
      return this.format;
    },
    getYear() {
      return this.year;
    },
    getGenres() {
      return this.genres;
    }
  },
  actions: {
    setTitle(newTitle) {
      this.title = newTitle
    },

    setAuthor() {
      this.author = newAuthor;
    },
    setPages(newPages){
      this.Pages = newPages;
    },
    setFormat(newFormat) {
      this.format = newFormat;
    },
    setYear(newYear) {
     this.year = newYear;
    },
    setGenres(newGenres) {
      this.genres = newGenres;
    },
  }
})
