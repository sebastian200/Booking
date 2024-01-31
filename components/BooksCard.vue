
<style></style>

<template>
  <div class="w-full">
    
      <div id="BooksCard" class=" rounded-md border bg-slate-200 0 m-1 flex justify-between ">
        <nuxt-link to="/BookPopup">
        <div class="p-1 flex">
         
          <img class=" h-20 rounded-md" src="../assets//Images/booksImmages/nedladdning (1).jpg" alt="">
          <div id="bookText" class="my-3 mx-3">
            <p id="author" class="text-center text-lg font-bold">{{ book.author }}</p>
            <p id="title" class=" text-center ">{{ book.title }}</p>
          </div>
        
        </div>
      </nuxt-link>
        
        
     
        <div class=" my-1">
          <p class="text-center text-xl">{{ books.availableAmount }} left</p>
          <button @click="lendBook()" class="px-4 py-2">Låna bok</button>
         


        </div>
      </div>

  </div>
</template>



<script setup>
import { ref, computed } from 'vue'
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()


const props = defineProps(["books"])
const exists = ref(true)

const books = props.books
const book = books.book

function removeBook() {

} 

function lendBook() {
  books.availableAmount -= 1

  for (let i = 0; i < bookshelf.books.length; i++) {
    if (bookshelf.books[i].id == book.id) {
      bookshelf.books[i].availableAmount -= 1
      console.log(bookshelf.books[i])
   
    }
  }

}



</script>
