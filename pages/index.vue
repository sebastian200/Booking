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
  console.log(json)

  bookshelf.fromJSON(json)

  return $bookshelf.write(bookshelf.toJSON())
})
.then(json => {
  console.log(json)
})
.catch(error => {
  console.log("Could not read bookshelf json")
})
</script>
