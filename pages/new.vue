<template>
  <div class=" md:px-20 lg:px-20 xl:px-96  ">
    <form @submit.prevent="addHandler" class=" bg-slate-200 px-3 pb-5 shadow">
      <div class="p-2">
        <div class="flex justify-center  ">
          <input class="" type="file" @change="handleFileChange" accept="image/*" />
        </div>
        <div class="flex justify-center">
          <img class="rounded-xl shadow w-2/3 md:w-1/2 xl:w-1/3" v-if="image" :src="image"
            alt="Selected Image" />
        </div>
      </div>
      <div class="text-center">
        <div class="text-xl font-bold">{{ title }}</div>
        <div>{{ author }}</div>
      </div>
      <div>
        <div>Titel</div>
        <div class="flex justify-center">
          <input class="w-full md:w-2/3 " type="text" placeholder="Skriv titel här" v-model="title" required />
        </div>
        <div>Författre</div>
        <div class="flex justify-center">
          <input class="w-full md:w-2/3 " type="name" placeholder="Skriv Författar här" v-model="author" required />
        </div>
      </div>
      <div>Beskrivning</div>
      <textarea class="w-full h-32 border p-1" v-model="description"></textarea>
      <div class="">
        <div class="flex justify-around">
          <div class="text-center">
            <div>Språk</div>
            <select v-model="language">
              <option value="swedish">Svenska</option>
              <option value="english">Engelska</option>
              <option value="spanish">Spanska</option>
              <option value="french">Franska</option>
              <option value="german">Tyska</option>
              <option value="italian">Italienska</option>
            </select>
          </div>
          <div class="text-center">
            <div>Typ</div>
            <select v-model="format">
              <option value="pocket">Pocket</option>
              <option value="hardcover">Hardcover</option>
            </select>
          </div>
          <div class="text-center">
            <div>År</div>
            <select v-model="year">
              <option v-for="year in years" :value="year">{{ year }}</option>
            </select>

          </div>
        </div>
        <div class="flex justify-between">
          <div class="text-center">
            <div>Sidor</div>
            <input class="w-1/2" type="number" placeholder="Antal Sidor" v-model="pages" />
          </div>
          <div class=" text-center">
            <div>Kopior</div>
            <input class="w-1/2" type="number" placeholder="Antal Kopior" v-model="copies" />
          </div>
        </div>
      </div>
      <div class="pb-5">
        <div>Genres</div>
        <Genres class="" />
      </div>
      <div class="flex justify-center">
        <button type="submit" class="bg-blue-100 hover:bg-blue-200 disabled:bg-red-100 cursor-pointer">Add</button>
      </div>
    </form>
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

const years = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => 1900 + i);

const title = ref("")
const author = ref("")
const year = ref(null)
const pages = ref(null)
const copies = ref(null)
const genres = ref(null)
const language = ref("svenska")
const format = ref("")
const description = ref("")
const image = ref("https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg")

const handleFileChange = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = (e) => {
        image.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const bookExists = async (book) => {
  const books = useBooksStore()

  let json = await $books.read()

  books.fromJSON(json)

  for(let current of books.getBooks) {
    if(book.hash === current.hash) return true
  }
  return false
}

const addSuggestionsBook = (book) => {
  const suggestions = useSuggestionsStore()

  const suggestion = new Suggestion()

  suggestion.init(book)
  .then(() => {
    $suggestions.read()
    .then(json => {
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
  })
}

const addBookshelfBook = (book) => {
  const bookshelf = useBookshelfStore()

  const books = new Books()

  books.init(book, copies.value)
  .then(() => {
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
  })
}

const addHandler = () => {
  const book = new Book({
    title:    title.value,
    author:   author.value, 
    year:     year.value,
    pages:    pages.value, 
    genres:   genres.value,
    format:   format.value,
    language: language.value,
    description: description.value,
    image: image.value
  })

  bookExists(book).then(exists => {
    if(exists) {
      showModal.value = true

      return false
    }
    else {
      return addBook(book)
    }
  })
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
        

