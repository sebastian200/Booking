import { defineStore } from "pinia"

import Suggestion from "../classes/Suggestion.js"

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    // For some reason, suggestions can only contain POJOs
    suggestions: []
  }),
  getters: {
    /*
     *
     */
    getSuggestions() {
      return this.suggestions.map(suggestion => {
        return Suggestion.fromJSON(suggestion)
      })
    }
  },
  actions: {
    /*
     * Returns
     * - Suggestion | the suggestion at the index 
     * - null       | the index was out of bounds
     */
    getSuggestion(index) {
      if(index < 0 || index > this.suggestions.length) {
        return null
      }
      return Suggestion.fromJSON(this.suggestions[index])
    },
    /*
     * Returns
     * - index | the index of the suggestion with the hash
     * - (-1)  | no suggestion has the inputted hash
     */
    getHashSuggestionIndex(hash) {
      for(let index in this.suggestions) {
        let suggestion = this.getSuggestion(index)

        let suggestionHash = suggestion.getBook().getHash()

        if(suggestionHash === hash) return index
      }
      return -1
    },
    /*
     * Params:
     * - suggestion | the suggestion to add
     *
     * Returns:
     * - true  | the suggestion was successfully added
     * - false | something went wrong
     */
    addSuggestion(suggestion) {
      let hash = suggestion.getBook().getHash()

      for(let current of this.getSuggestions) {
        if(current.getBook().getHash() === hash) {
          return false
        }
      }
      this.suggestions.push(suggestion.toJSON())

      return true
    },
    /*
     * Params:
     * - hash | the book hash for the effected suggestion
     */
    removeSuggestion(hash) {
      let index = this.getHashSuggestionIndex(hash)

      if(index === -1) return false

      this.suggestions.splice(index, 1)

      return true
    },
    /*
     * Params:
     * - hash | the book hash for the effected suggestion
     *
     * Returns
     * - true  | the suggestion was successfully upvoted
     * - false | something went wrong
     */
    upvoteSuggestion(hash) {
      let index = this.getHashSuggestionIndex(hash)

      let suggestion = this.getSuggestion(index)

      if(suggestion == null) return false

      suggestion.upvote()

      this.suggestions[index] = suggestion.toJSON()

      return true
    },
    /*
     * Params:
     * - hash | the book hash for the effected suggestion
     *
     * Returns
     * - true  | the suggestion was successfully downvoted
     * - false | something went wrong
     */
    downvoteSuggestion(hash) {
      let index = this.getHashSuggestionIndex(hash)

      let suggestion = this.getSuggestion(index)

      if(suggestion == null) return false

      suggestion.downvote()

      this.suggestions[index] = suggestion.toJSON()

      return true
    },
    /*
     * 
     */
    toJSON() {
      return {
        suggestions: this.suggestions
      }
    },
    /*
     * Params
     * - json | the json object to deserialize
     */
    fromJSON(json) {
      try {
        json.suggestions.map(suggestion => this.suggestions.push(suggestion))
      }
      catch(error) {
        console.log("Could not deserialize json to suggestions")
        console.log(error)
      }
    }
  }
})
