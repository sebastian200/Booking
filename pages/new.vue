<template>
  <div class="flex">
    <form @submit.prevent="addHandler" class="grid grid-cols-2 gap-2">
      <input v-model="title"  placeholder="Title"  type="text" required class="col-span-2">
      <input v-model="author" placeholder="Author" type="name" required class="col-span-2">

      <input type="file" @change="handleFileChange" accept="image/*">

      <input v-model="year"     placeholder="Year"     type="number" min="1900" max="2099" step="1">
      <input v-model="language" placeholder="Language" type="text"   class="">
      <input v-model="pages"    placeholder="Pages"    type="number" class="">

      <select v-model="bookType" class="">
        <option value="pocket">Pocket</option>
        <option value="hardcover">Hardcover</option>
      </select>

      <!-- Bookshelf specific inputs -->
      <input v-model="copies" placeholder="Copies" type="number">

      <button type="submit" class="bg-blue-100 hover:bg-blue-200 disabled:bg-red-100 cursor-pointer">Add</button>
    </form>
    
    <img v-if="imageUrl" :src="imageUrl" alt="Selected Image">
  </div>
  <button @click="toggleModal" class="px-4 py-2 bg-blue-500 text-white">Toggle Modal</button>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg text-center">
      <p class="text-xl mb-4">The book already exists</p>
      <button @click="toggleModal" class="px-4 py-2 bg-blue-500 text-white">Close</button>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  computed
} from "vue"

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}

const route = useRoute()
const type = route.query.type

if(type != "suggestions" && type != "bookshelf") {
  navigateTo({path: "/"})
}

import Book from "../classes/Book.js"
import Suggestion from "../classes/Suggestion.js"
import Books from "../classes/Books.js"

const { $bookshelf, $books, $suggestions } = useNuxtApp()

const title = ref("")
const author = ref("")
const year = ref(null)
const pages = ref(null)
const copies = ref(null)
const genres = ref(null)
const language = ref(null)
const format = ref("")

const imageUrl = ref(null)
const bookType = ref("")

const handleFileChange = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
        imageUrl.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const bookExists = async (book) => {
  const books = useBooksStore()

  let json = await $books.read()

  console.log(json)

  books.fromJSON(json)

  console.log(books.toJSON())

  for(let current in books.getBooks) {
    console.log(`book: ${book.hash} current: ${current.hash}`)
    if(book.hash === current.hash) return true
  }
  return false
}

const addSuggestionsBook = (book) => {
  const suggestions = useSuggestionsStore()

  const suggestion = new Suggestion({book: book})

  $suggestions.read()
  .then(json => {
    console.log("json: ", json)
    suggestions.fromJSON(json)

    suggestions.addSuggestion(suggestion)

    $suggestions.write(suggestions.toJSON())

    navigateTo({path: "/suggestions"})

    return true
  })
  .catch(error => {
    console.log(error)

    return false
  })
}

const addBookshelfBook = (book) => {
  const bookshelf = useBookshelfStore()

  const books = new Books({book: book, amount: copies.value})

  $bookshelf.read()
  .then(json => {
    bookshelf.fromJSON(json)

    bookshelf.addBooks(books)

    $bookshelf.write(bookshelf.toJSON())

    navigateTo({path: "/"})
    
    return true
  })
  .catch(error => {
    console.log(error)

    return false
  })
}

const addHandler = () => {
  const book = new Book({
    title:    title.value,
    author:   author.value, 
    year:     year.value,
    pages:    pages.value, 
    genres:   genres.value,
    format:   bookType.value,
    language: language.value,
  })

  bookExists(book).then(exists => {
    if(exists) {
      showModal.value = true

      return false
    }
  })

  console.log("Book does not exist")

  return addBook(book)
}

const addBook = (book) => {
  if(type === "suggestions") {
    return addSuggestionsBook(book)
  }
  else if(type === "bookshelf") {
    return addBookshelfBook(book)
  }
  return false
}
</script>
        

