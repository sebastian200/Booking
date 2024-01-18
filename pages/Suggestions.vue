<template>
  <div>
    <p>{{ suggestions.$state }}</p>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

const { $suggestions } = useNuxtApp()

const suggestions = useSuggestionsStore()

$suggestions.read().then(json => {
  suggestions.fromJSON(json)

  console.log(suggestions.toJSON())
}).catch(error => {
  console.log("Could not read suggestions json")
})
</script>
