
<style></style>

<template>

  <div  >
  <div v-if="books.value.availableAmount > 0" class="w-full" @mouseover="showRemoveButton = true" @mouseleave="showRemoveButton = false">
    <div id="BooksCard" class="rounded-md border bg-slate-200 0 m-1 flex justify-between">
      <nuxt-link :to="`/BookPopup/${books.id}`">
        <div class="p-1 flex">
          <img class="h-20 rounded-md" :src="book.imageURL" alt="">
          <div id="bookText" class="my-3 mx-4">
            <p id="author" class="text-center text-lg font-bold">{{book.title}}</p>
            <p id="title" class="text-center">{{ book.author }}</p>
          </div>
        </div>
      </nuxt-link>
      <div class="my-1">
        <p class="text-center text-xl" :key="books.id">{{ books.value.availableAmount }} left</p>
        <button v-if="!isLended" @click="lend()" class="px-4 py-2">Låna bok</button>
        <button v-if="isLended" @click="returnBook()" class="bg-red-500 px-4 py-2">Lämna tillbaka</button>
        <button v-if="showRemoveButton" @click="removeBooks()" class="bg-red-500 px-4 py-2">Ta bort</button>
      </div>
    </div>

  </div>
  <div v-if="books.value.availableAmount <= 0" @mouseover="showRemoveButton = true">
    <div id="BooksCard" class="rounded-md border bg-red-400 0 m-1 flex justify-between">
      <nuxt-link :to="`/BookPopup/${books.id}`">
        <div class="p-1 flex">
          <img class="h-20 rounded-md" :src="book.imageURL" alt="">
          <div id="bookText" class="my-3 mx-4">
            <p id="author" class="text-center text-lg font-bold">{{book.title}}</p>
            <p id="title" class="text-center">{{ book.author }}</p>
          </div>
        </div>
      </nuxt-link>
      <div class="">
        <button v-if="isLended" @click="returnBook()" class="bg-red-500 px-4 py-2">Lämna tillbaka</button>
        <button v-if="showRemoveButton" @click="removeBooks()" class="bg-red-500 px-4 py-2">Ta bort</button>
        <p class="text-lg font-bold my-6 mx-4" > Slutsåld</p>
      </div>
    </div>


  </div>
  
</div>

   
</template>



<script setup>
import { ref, computed } from 'vue'

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()


const { books } = defineProps(["books"])
const emit = defineEmits([
  "remove",
  "returnBook",
  "lend"
])
const showRemoveButton = ref(false)

var isLended = ref(false)

const book = books.value.book

const returnBook = () => {
  emit("returnBook", books)
  isLended = false
}

const lend = () => {
  emit("lend", books)
  isLended = true
  console.log(books.value.availableAmount)

}

const removeBooks = () => {
  emit("remove", books)
}

</script>
