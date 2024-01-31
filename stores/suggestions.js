import { defineStore } from "pinia"

import Suggestion from "../classes/Suggestion.js"

// Compares if two deserialized suggestions are the same
const suggestionCompare = (first, second) => {
  /*
  let firstJson = first.toJSON()
  let secondJson = second.toJSON()

  return JSON.stringify(firstJson) === JSON.stringify(secondJson)
  */
  return first.id === second.id
}

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    // suggestions is an array of objects with an id and suggestion
    // [{id: 0, suggestion: Suggestion}]
    suggestions: []
  }),
  getters: {
    getSuggestions() {
      return this.suggestions.map(object => {
        return {
          ...object,
          value: Suggestion.fromJSON(object.value)
        }
      })
    },
    getNewId() {
      let id = 0
      for(let suggestion of this.suggestions.sort((a, b) => a.id - b.id)) {
        if(id < suggestion.id) break
        else id++
      }
      return id
    }
  },
  actions: {
    // Returns the suggestion at index after deserializing it
    getSuggestion(index) {
      let suggestion = this.suggestions[index]

      suggestion.value = Suggestion.fromJSON(suggestion.value)

      return suggestion
    },
    // Adds the suggestion after serializing it
    addSuggestion(suggestion) {
      // For some reason, suggestions can only contain POJOs
      this.suggestions.push({
        id: this.getNewId,
        value: suggestion.toJSON()
      })
    },
    removeSuggestion(suggestion) {
      this.suggestions.forEach((current, index) => {
        // Maybe add suggestionCompare
        if(current.id == suggestion.id) {
          this.suggestions.splice(index, 1)
        }
      })
    },
    upvoteSuggestion(suggestion) {
      for(let index in this.suggestions) {
        let current = this.getSuggestion(index)

        if(suggestionCompare(current, suggestion)) {
          current.value.upvote()

          this.suggestions[index] = {
            id: current.id,
            value: current.value.toJSON()
          }
        }
      }
    },
    downvoteSuggestion(suggestion) {
      for(let index in this.suggestions) {
        let current = this.getSuggestion(index)

        if(suggestionCompare(current, suggestion)) {
          current.value.downvote()

          this.suggestions[index] = {
            id: current.id,
            value: current.value.toJSON()
          }
        }
      }
    },
    toJSON() {
      return {
        suggestions: this.suggestions
      }
    },
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
