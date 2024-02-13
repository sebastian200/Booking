
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
    <div id="bookSorting" class="fixed bg-slate-50 shadow w-full ">
      <div class="">
        <div class="shadow flex justify-around pb-4 p-1 w-full ">
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

      <li v-for="book in getSortedBooks(sortOption)" :key="book.id" class="flex flex-wrap">
        <BooksCard v-if="book.value.availableAmount > 0" :books=book @remove="removeBooks" @lend="lendBook" @returnBook="returnBook" />
        <div>{{book}} hello</div>
      </li>
    </div>
    <div>hello</div>
  </div>
</template> 

<script setup>
import { ref, computed } from 'vue'
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()

const showFilter = ref(false)
const sortOption = ref('year')
var books = bookshelf.books



function toggleFilter() {
  showFilter.value = !showFilter.value
}

console.log('hello')

function getSortedBooks(sortOption, books = bookshelf.books) {
      
      switch (sortOption) {
        case 'title':
          return books.sort((a, b) => a.value.book.title.localeCompare(b.value.book.title))
        case 'pages':
          return books.sort((a, b) => a.value.book.pages - b.value.book.pages)
        case 'year':
          return books.sort((a, b) => a.value.book.year - b.value.book.year)
        default:
          return books
        case 'rating':
          return books.sort((a, b) => a.value.book.rating - b.value.book.rating)
      }
}
console.log(bookshelf.filterBooks('h'))

// Input: suggestion: {id: int, value: Suggestion}
const removeBooks = (books) => {
  bookshelf.removeBook(books)
}

const returnBook = (books) => {
  bookshelf.returnBook(books)
  console.log("hllo")
}

const lendBook = (books) => {
  bookshelf.lendBook(books)  
}

$bookshelf.read()
.then(json => {
  bookshelf.fromJSON(json)
})
.catch(error => {
  console.log(error)
})

$bookshelf.write(bookshelf.toJSON())



</script>
