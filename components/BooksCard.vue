
<style></style>

<template>
  <div class="w-full">

    <div id="BooksCard" class=" rounded-md border bg-slate-200 0 m-1 flex justify-between ">
      <nuxt-link to="/BookPopup">
        <div class="p-1 flex">

          <img class=" h-20 rounded-md" :src="book.imageURL" alt="">
          <div id="bookText" class="my-3 mx-4">
            <p id="author" class="text-center text-lg font-bold">{{book.title}}</p>
              <p id="title" class=" text-center ">{{ book.author }}</p>
          
          </div>

        </div>
      </nuxt-link>



      <div class=" my-1">
        <p class="text-center text-xl">{{ books.value.availableAmount }} left</p>
        <button v-if="!isLended" @click="lend()" class="px-4 py-2">Låna bok</button>
        <button v-if="isLended" @click="returnBook()" class=" bg-red-500 px-4 py-2"> Lämna tillbaka </button>



      </div>
    </div>

  </div>
</template>



<script setup>
import { ref, computed } from 'vue'

const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()



const props = defineProps(["books"])
const emit = defineEmits([
  "remove",
  "returnBook",
  "lend"
])
const exists = ref(true)
var isLended = ref(false)

const books = props.books
const book = books.value.book


const returnBook = () => {
  emit("returnBook", books)
  isLended = false
}

const lend = () => {
  emit("lend", books)
  isLended = true

}

const removeBooks = () => {
  emit("remove", books)
}




</script>
