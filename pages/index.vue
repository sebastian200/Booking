
<style>
.filter {
  transition: height 0.3s ease-in-out;
}

.filter:hover {
  transform: scale(1.1);
}
</style>

<template>
  <div>
    <div id="bookSorting" class="fixed bg-slate-50 shadow w-full pb-3">
      <div class="p-1 w-full">
        <div class="flex justify-around">
          <input type="text" placeholder="sök" class="m-1 p-1">
          <button class="" @click="toggleFilter">▼ Filter</button>
        </div>
        <div v-if="showFilter">
          <Filter />
        </div>
      </div>
      
    </div>
    <div class="h-20"></div>
    <div class="flex justify-between w-screen">
      <div class=" text-sm text-center m-1 text ">{{ books.length }}+ resultat</div>
      <div class="  mx-5">
        <select v-model="sortOption" class="bg-slate-600 rounded-md p-0.5 px-2 ">
          <option value="title" >Title</option>
          <option value="pages">Pages</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
    <div id="listOfBooks" class="">

      <li v-for="book in books" class="flex flex-wrap">
        <BooksCard :books=book />
      </li>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()

const showFilter = ref(false)
const sortOption = ref('title')
const books = bookshelf.books




function toggleFilter() {
  showFilter.value = !showFilter.value
}


const sortedBooks = computed(() => {
  const books = bookshelf.books
  switch (sortOption.value) {
    case 'title':
      return books.sort((a, b) => a.title.localeCompare(b.title))
    case 'pages':
      return books.sort((a, b) => a.pages - b.pages)
    case 'year':
      return books.sort((a, b) => a.year - b.year)
    default:
      return books
  }
})



$bookshelf.read()
  .then(json => {
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
