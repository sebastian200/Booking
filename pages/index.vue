

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
          <input v-model="title" type="text" placeholder="sök" class="m-1 p-1" >
          <button class="" @click="toggleFilter">▼ Filter</button>
        </div>
        <div v-if="showFilter">
          <Filter :data=newFormData  @submit="filterBooks"/>
        </div>
      </div>
      
    </div>
    <div class="h-20 z-10"></div>
    <div class="flex justify-between w-screen">
      <div class=" text-sm text-center m-1 text ">{{ booksModified.length }}+ resultat</div>
      <div class="  mx-5">
        <select v-model="sortOption" class="bg-slate-600 rounded-md p-0.5 px-2 "> 
          <option value="title" >Titel A-Ö</option>
          <option value="title-reversed">Titel A-Ö </option>
          <option value="pages">Sidor stigande</option>
          <option value="pages-reversed">Sidor fallande</option>
          <option value="year">Älst</option>
          <option value="year-reversed">Nyast</option>
        </select>
      </div>
    </div>
    <div id="listOfBooks" class="">

      <li v-for="book in booksModified" :key="book.id" class="flex flex-wrap"> 
        <BooksCard :books=book @remove="removeBooks" @lend="lendBook" @returnBook="returnBook" />
        <!-- <div>{{book}} hello</div> -->
      </li>
    </div>

  </div>
</template> 

<script setup>
import { ref, computed, watch } from 'vue'
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()

const showFilter = ref(false)
const sortOption = ref('title')
const title = ref('')
let newFormData = {title: '', author: '', type: '', minPages: 0, maxPages: Infinity, genres: [], language: '', minYear: 1900, maxYear: 2023, rating: 0}
let books = ref(bookshelf.books)



$bookshelf.read()
.then(json => {


  bookshelf.fromJSON(json)

  books.value = bookshelf.books

})
.catch(error => {
  console.log(error)
})

watch(bookshelf.books, () => {
  $bookshelf.write(bookshelf.toJSON()) 
})



function toggleFilter() {
  showFilter.value = !showFilter.value
}
const booksModified = computed(() => {
  newFormData.title = title.value
  let modifiedBooks = bookshelf.filterBooks(newFormData, books)
  console.log(newFormData)
  console.log(modifiedBooks)
  modifiedBooks = getSortedBooks(sortOption.value, modifiedBooks)
  return modifiedBooks
    });



const filterBooks = (formData) => {

  newFormData = formData
  
  console.log(newFormData)
}

function getSortedBooks(sortOption, modifiedBooks) {
      
      switch (sortOption) {
        case 'title':
          return modifiedBooks.sort((a, b) => a.value.book.title.localeCompare(b.value.book.title))
        case 'title-reversed':
          return modifiedBooks.sort((a, b) => b.value.book.title.localeCompare(a.value.book.title))
        case 'pages':
          return modifiedBooks.sort((a, b) => a.value.book.pages - b.value.book.pages)
        case 'pages-reversed':
          return modifiedBooks.sort((a, b) => b.value.book.pages - a.value.book.pages)
        case 'year':
          return modifiedBooks.sort((a, b) => a.value.book.year - b.value.book.year)
        case 'year-reversed':
          return modifiedBooks.sort((a, b) => b.value.book.year - a.value.book.year)
        case 'rating':
          return modifiedBooks.sort((a, b) => a.value.book.rating - b.value.book.rating)
        case 'rating-reversed':
          return modifiedBooks.sort((a, b) => b.value.book.rating - a.value.book.rating)
        default:
          console.log(filteredBooks, newFormData)
          return modifiedBooks
      }
}


// Input: suggestion: {id: int, value: Suggestion}
const removeBooks = (books) => {
  bookshelf.removeBooks(books)
  $bookshelf.write(bookshelf.toJSON()) 
}

const returnBook = (books) => {
  bookshelf.returnBook(books)
  $bookshelf.write(bookshelf.toJSON()) 
}

const lendBook = (books) => {
  bookshelf.lendBook(books)
  $bookshelf.write(bookshelf.toJSON()) 
}





</script>
