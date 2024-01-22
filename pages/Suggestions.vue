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
      <button>skapa förslag</button>
      
    </div>
    <div id="listOfBooks" class="px-2">
      <div>1000+ resultat</div>
      <div class="flex flex-wrap">
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
        <BooksCard/>
      </div>
      
    </div>
    <p>{{ suggestions.$state }}</p>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

const { $suggestions } = useNuxtApp()

const suggestions = useSuggestionsStore()

$suggestions.read()
.then(json => {
  console.log(json)

  suggestions.fromJSON(json)

  return $suggestions.write(suggestions.toJSON())
})
.then(json => {
  console.log(json)
})
.catch(error => {
  console.log("Could not read suggestions json")
})
</script>
