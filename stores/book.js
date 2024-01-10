import { defineStore } from "pinia"

export const useBookStore = defineStore("book", {
  state: () => ({
    title: "",
    author: "",
    pages: 0,
    format: "",
    year: 0,
    genres: [],
    imageLink: "";
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
    },
    getImageLink() {
      return this.imageLink;
    }
  },
  actions: {
        // Execute code on initialization
    init() {

    },

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
    setImageLink(newImageLink) {
      this.imageLink = newImageLink;
    }
  }
})
