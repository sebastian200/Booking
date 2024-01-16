import { defineStore } from "pinia"

export const useSuggestionsStore = defineStore("suggestions", {
  state: () => ({
    suggestions: []
  }),
  getters: {
    getSuggestions() {

    },
    getSuggestion(index) {

    }
  },
  actions: {
    addSuggestion(suggestion) {

    },
    removeSuggestion(index) {

    },
    serialize() {
      return {
        ...this.$state,
      }
    },
    deserialize(json) {
      Object.assign(this.$state, json)
    }
  }
})
