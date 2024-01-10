import { defineStore } from "pinia"

export const useSuggestionStore = defineStore("suggestion", {
  state: () => ({
    book: useBookStore(),
    votes: 0
  }),
  getters: {
    getBook() {

    }
    getVotes() {

    }
  },
  actions: {
    upvote() {

    }
    downvote() {

    }
  }
})
