<template>
  <div>
    <div id="bookFilterContainer">
      <div>

      </div>
    </div>
    <div id="bookSorting">
      sort
    </div>
    <div id="listOfBooks" class="flex">
      
    </div>
  </div>
</template>

<script setup>
import {
  useBooksStore
} from "~/stores/books"

const booksStore = useBooksStore()

console.log(booksStore.book.getTitle)

booksStore.book.setTitle("Sagan om Ringen")

console.log(booksStore.book.getTitle)
</script>
