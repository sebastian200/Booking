import { defineStore } from "pinia"

export const useBooksStore = defineStore("books", {
  state: () => ({
    book: useBookStore(),
    mAmount: 0,
    aAmount: 0
  }),
  getters: {

  },
  actions: {
    // Execute code on initialization
    init() {

    }
  }
})
