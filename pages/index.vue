<template>
  <div>
    
    <div id="bookSorting ">
      
      <div class="flex p-2 justify-around"> 
        <div class="bg-blue-500 m-1 p-1 rounded-lg"><p>▼ Filter</p></div>
        <form action="/action_page.php">
          <label for="cars">Sortera efter</label>
          <select class="border-solid border-gray-200 border-b-2 p-1 rounded-3xl bg-red-600 m-1" name="sorting" id="sorting" >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
      
    </div>
    <div id="listOfBooks" class="px-2">
      <div>1000+ resultat</div>
      <div class="flex flex-wrap">
        <Filter/>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
       
      </div>
    
      
    </div>
    <p>{{ bookshelf.$state }}</p>
  </div>
</template>

<script setup>

import {
  useBooksStore
} from "~/stores/books"


import Book from "../classes/Book.js"
import Books from "../classes/Books.js"


const booksStore = useBooksStore()

const { $bookshelf } = useNuxtApp()

const bookshelf = useBookshelfStore()

$bookshelf.read()
.then(json => {
  console.log(json)

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
