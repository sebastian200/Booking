<template>
  <div>
    <p>{{ bookshelf.$state }}</p>
  </div>
</template>

<script setup>
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const { $bookshelf } = useNuxtApp()

const bookshelf = useBookshelfStore()

$bookshelf.read()
.then(json => {
  bookshelf.fromJSON(json)

  console.log(bookshelf.toJSON())
})
.catch(error => {
  console.log("Could not read bookshelf json")
})
</script>
