import { defineStore } from "pinia"

export const useBookStore = defineStore("book", {
  state: () => ({
    title: "Harry Potter"
  }),
  getters: {
    getTitle() {
      return this.title
    }
  },
  actions: {
    setTitle(newTitle) {
      this.title = newTitle
    }
  }
})
