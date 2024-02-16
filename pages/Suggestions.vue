<template>
  <div class="flex flex-col">
    <div class="">
      <NuxtLink to="new?type=suggestions" class="bg-red-400">New</NuxtLink>
    </div>
    <div v-for="(suggestion, index) in suggestions.getSuggestions" :key="suggestion.hash" class="flex flex-col">
      <SuggestionCard :suggestion="suggestion" @remove="removeSuggestion" @upvote="upvoteSuggestion" @downvote="downvoteSuggestion" />
    </div>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

import {
  watch,
  onMounted
} from "vue"

const { $books, $suggestions } = useNuxtApp()

const suggestions = useSuggestionsStore()
const books = useBooksStore()

onMounted(() => {
  $books.read()
  .then(json => {
    books.fromJSON(json)
  })
  .catch(error => {
    console.log(error)
  })

  $suggestions.read()
  .then(json => {
    suggestions.fromJSON(json)

    // Only setup watcher after suggestions is loaded correctly
    watch(suggestions.suggestions, () => {
      $suggestions.write(suggestions.toJSON())
    })
  })
  .catch(error => {
    console.log(error)
  })
})

const removeSuggestion = (hash) => {
  suggestions.removeSuggestion(hash)
}

const upvoteSuggestion = (hash) => {
  suggestions.upvoteSuggestion(hash)
}

const downvoteSuggestion = (hash) => {
  suggestions.downvoteSuggestion(hash)
}
</script>
