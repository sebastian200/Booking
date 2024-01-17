import { defineStore } from "pinia"

import Book from "../classes/Book.js"
import Suggestion from "../classes/Suggestion.js"

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    suggestions: []
  }),
  getters: {
    getSuggestions() {
      return this.suggestions
    },
    getSuggestion() {

    }
  },
  actions: {
    addSuggestion() {

    },
    removeSuggestion() {

    },
    toJSON() {

    },
    fromJSON(json) {
      
    }
  }
})
