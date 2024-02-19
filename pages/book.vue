<!-- This page is only ment to display a book, not to borrow, upvote or anything like that -->
<template>
  <div v-if="book" class="flex flex-col font-mono">
    <div class="flex flex-row justify-between text-lg">
      <p>{{ book?.getAuthor() }}</p>
      <p>{{ book?.getHash() }}</p>
    </div>
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center max-w-96 text-2xl">
        <p>{{ book?.getTitle() }}</p>
        <img :src="book?.getImage()" class="aspect-square object-cover m-2"/>
      </div>
      <div>
        <p>{{ book?.getRating() }}</p>
      </div>
    </div>
    <div>
      <div class="shadow p-1.5 flex justify-between">
        <p>Genres</p>
        <ul class="flex gap-4">
          <li v-for="genre in book?.getGenres()" :key="genre" class="bg-blue-100 p-5 text-md">
            {{ genre }}
          </li>
        </ul>
      </div>
      <div class="shadow p-1 flex justify-between">
        <p>Typ</p>
        <div>språk</div>
      </div>
      <div class="flex justify-between">
        <div class=" my-auto p-1">Pages</div>
        <img class="h-14" src="/assets/Images/stars-customer-reviews-illustration-png.webp" alt="">
      </div>
    </div>
    <div class="px-2.5 pb-5 text-sm">
      Sammanfattning
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from "vue"

const route = useRoute()
const hash = route.query.hash

const books = useBooksStore()
const { $books } = useNuxtApp()

// Book is made reactive, so Vue can detect when it gets initialized
var book = ref(null)

$books.read()
.then(json => {
  books.fromJSON(json)

  book.value = books?.getBook(hash)

  console.log(book.value)

  if(hash === undefined || book.value == null) {
    navigateTo({path: "/"})
  }
})
.catch(error => {
  console.log(error)
})
</script>
