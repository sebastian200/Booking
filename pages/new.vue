<template>
  <div class="flex">
    <form @submit.prevent="addBook" class="grid grid-cols-2 gap-2">
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
</template>

<script setup>
import {
  ref,
  computed
} from "vue"

const route = useRoute()
const type = route.query.type

if(type != "suggestions" && type != "bookshelf") {
  navigateTo({path: "/"})
}

import Book from "../classes/Book.js"
import Suggestion from "../classes/Suggestion.js"
import Books from "../classes/Books.js"

const { $bookshelf, $books, $suggestions } = useNuxtApp()

const bookshelf = useBookshelfStore()
const suggestions = useSuggestionsStore()

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

const addBookAllowed = computed(() => {
  return title.value && author.value
})

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

const addBook = () => {
  const book = new Book({
    title:    title.value,
    author:   author.value, 
    year:     year.value,
    pages:    pages.value, 
    genres:   genres.value,
    format:   bookType.value,
    language: language.value,
  })

  if(type === "suggestions") {
    const suggestion = new Suggestion({book: book})

    $suggestions.read()
    .then(json => {
      console.log("json: ", json)
      suggestions.fromJSON(json)

      suggestions.addSuggestion(suggestion)

      $suggestions.write(suggestions.toJSON())

      navigateTo({path: "/suggestions"})
    })
    .catch(error => {
      console.log(error)
    })
  }
  else if(type === "bookshelf") {
    const books = new Books({book: book, amount: copies.value})

    $bookshelf.read()
    .then(json => {
      bookshelf.fromJSON(json)

      bookshelf.addBooks(books)

      $bookshelf.write(bookshelf.toJSON())

      navigateTo({path: "/"})
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
        

