import { defineStore } from "pinia"

export const useBooksStore = defineStore("books", {
  state: () => ({
    book: useBookStore(),
    mAmount: 0,
    aAmount: 0
  }),
  getters: {
    getMAmount() {
      return this.mAmount;
    },
    getAAmount() {
      return this.aAmount;
    }
  },
  actions: {

    setMAmount(newMAmount) {
      this.MAmount = newMAmount;
    },
    setMAmount(newAAmount) {
      this.AAmount = newAAmount;
    },

    add() {

    },
    remove() {

    },
    borrow() {

    },
    returns() {
      
    },
    
  }
})
