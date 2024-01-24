<template>
  <div class="flex flex-col">
    <div class="">
      <button @click="addSuggestion" class="bg-red-400">New</button>
    </div>
    <div v-for="suggestion in filteredSuggestions" class="flex flex-col">
      <SuggestionCard :suggestion="suggestion" @delete="deleteSuggestion" @upvote="upvote" @downvote="downvote" />
    </div>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

const { $suggestions } = useNuxtApp()

const suggestions = useSuggestionsStore()

const filteredSuggestions = ref(suggestions.getSuggestions)

$suggestions.read()
.then(json => {
  console.log(json)

  suggestions.fromJSON(json)
})
.catch(error => {
  console.log(error)
})

const addSuggestion = () => {
  // This is just for test
  const book = new Book({title: "Harry Potter", author: "J.K. Rowling"})
  const suggestion = new Suggestion({book: book})

  suggestions.addSuggestion(suggestion)

  filteredSuggestions.value = suggestions.getSuggestions
}

const deleteSuggestion = (suggestion) => {
  // suggestions.deleteSuggestion(suggestion)
}

const upvote = (suggestion) => {
  console.log("Upvoting: ", suggestion)
  suggestion.upvote()
  // Update the suggestion's component
}

const downvote = (suggestion) => {
  console.log("Downvoting: ", suggestion)
  suggestion.downvote()
  // Update the suggestion's component
}
</script>
