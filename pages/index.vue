

<style>
.filter {
  transition: height 0.3s ease-in-out;
}

.filter:hover {
  transform: scale(1.1);
}
</style>

<template>
  <div class=" md:px-10 lg:px-28 ">
    <div id="bookSorting" class="fixed   w-full ">
      <div class="bg-slate-50 ">
        <div class=" flex justify-around pb-4 p-1 w-full ">
          <input v-model="title" type="text" placeholder="sök" class="m-1 p-1 w-1/2 border-none border border-slate-400">
          <div class="p-2"  @click="toggleFilter">▼ Filter</div>
        </div>

      </div>
      <div class="md:w-1/2 newBoder lg:w-1/3 xl:w-1/4 " v-if="showFilter">
        <Filter class=" " :data=newFormData @submit="filterBooks" />
      </div>

    </div>
    <div class="h-20 z-10"></div>
    <div class="flex justify-between ">
      <div class=" text-sm text-center m-1 text ">{{ booksModified.length }}+ resultat</div>
      <div class="  mx-5">
        <select v-model="sortOption" class=" rounded-md p-0.5 px-2 ">
          <option value="title">Titel A-Ö</option>
          <option value="title-reversed">Titel A-Ö </option>
          <option value="pages">Sidor stigande</option>
          <option value="pages-reversed">Sidor fallande</option>
          <option value="year">Älst,</option>
          <option value="year-reversed">Nyast</option>
        </select>
      </div>
    </div>
    <div id="listOfBooks" class=" flex flex-wrap">

      <div class="w-full lg:w-1/2 2xl:w-1/3" v-for="book in booksModified" :key="book.id" >
        <BooksCard  :books=book @remove="removeBooks" @lend="lendBook" @returnBook="returnBook" />
        <!-- <div>{{book}} hello</div> -->
      </div>
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
let newFormData = ref({ title: '', author: '', minPages: 0, maxPages: Infinity, genres: [], language: '', minYear: 1900, maxYear: 2023, rating: 0, format: '', })
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
  newFormData.value.title = title.value
  let modifiedBooks = bookshelf.filterBooks(newFormData.value, books)
  console.log(newFormData)

  modifiedBooks = getSortedBooks(sortOption.value, modifiedBooks)
  return modifiedBooks
});



const filterBooks = (formData) => {

  showFilter.value = !showFilter.value
  newFormData.value = formData

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
