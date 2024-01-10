import { defineStore } from "pinia"

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    suggestions: []
  }),
  getters: {
    getSuggestions() {

    }
    getSuggestion(index) {

    }
  },
  actions: {
    addSuggestion(suggestion) {

    }
    removeSuggestion(index) {

    }
  }
})
