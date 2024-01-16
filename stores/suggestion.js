import { defineStore } from "pinia"

export const useSuggestionStore = defineStore("suggestion", {
  state: () => ({
    book: useBookStore(),
    votes: 0
  }),
  getters: {
    getBook() {

    },
    getVotes() {

    }
  },
  actions: {
    upvote() {

    },
    downvote() {

    },
    serialize() {
      return {
        ...this.$state,
        book: this.book.serialize()
      }
    },
    deserialize(json) {
      Object.assign(this.$state, json)
      this.book.deserialize(json.book)
    }
  }
})
