<template>
  <div class="flex flex-col">
    <div class="">
      <button @click="addSuggestion" class="bg-red-400">New</button>
    </div>
    <div v-for="(suggestion, index) in suggestions.getSuggestions" :key="suggestion.id" class="flex flex-col">
      <SuggestionCard :suggestion="suggestion" @remove="removeSuggestion" @upvote="upvoteSuggestion" @downvote="downvoteSuggestion" />
    </div>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

import {
  watch
} from "vue"

const { $suggestions } = useNuxtApp()

const suggestions = useSuggestionsStore()

$suggestions.read()
.then(json => {
  suggestions.fromJSON(json)
})
.catch(error => {
  console.log(error)
})

watch(suggestions.suggestions, () => {
  $suggestions.write(suggestions.toJSON())
})

const addSuggestion = () => {
  // This is just for test
  const book = new Book({title: `Harry Potter ${Math.floor(Math.random() * 100)}`, author: "J.K. Rowling"})
  const suggestion = new Suggestion({book: book})

  suggestions.addSuggestion(suggestion)
}

// Input: suggestion: {id: int, value: Suggestion}
const removeSuggestion = (suggestion) => {
  suggestions.removeSuggestion(suggestion)
}

const upvoteSuggestion = (suggestion) => {
  suggestions.upvoteSuggestion(suggestion)
}

const downvoteSuggestion = (suggestion) => {
  suggestions.downvoteSuggestion(suggestion)
}
</script>
