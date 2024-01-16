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
        <bookFilter/>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
       
      </div>
      
    </div>
  </div>
</template>

<script setup>

import {
  useBooksStore
} from "~/stores/books"


const booksStore = useBooksStore()

console.log(booksStore.book.getTitle)

booksStore.book.setTitle("Sagan om Ringen")

console.log(booksStore.book.getTitle)
</script>
