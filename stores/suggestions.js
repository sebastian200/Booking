import { defineStore } from "pinia"

import Suggestion from "../classes/Suggestion.js"

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    suggestions: []
  }),
  getters: {
    getSuggestions() {
      return this.suggestions.map(suggestion => Suggestion.fromJSON(suggestion))
    },
    getSuggestion() {

    }
  },
  actions: {
    addSuggestion(suggestion) {
      // For some reason, suggestions can only contain POJOs
      this.suggestions.push(suggestion.toJSON())
    },
    removeSuggestion() {

    },
    toJSON() {
      return {
        suggestions: this.suggestions.map(suggestion => suggestion)
      }
    },
    fromJSON(json) {
      try {
        json.suggestions.map(suggestion => this.suggestions.push(suggestion))
      }
      catch(error) {
        console.log("Could not deserialize json to suggestions")
        // console.log(error)
      }
    }
  }
})
