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

$suggestions.read()
.then(json => {
  console.log(json)

  suggestions.fromJSON(json)

  return $suggestions.write(suggestions.toJSON())
})
.then(json => {
  console.log(json)
})
.catch(error => {
  console.log("Could not read suggestions json")
})
</script>
