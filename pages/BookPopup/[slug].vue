<style scoped >
li {
    @apply bg-green-300 px-2 rounded-full border-solid border-black mx-1;
}
</style>

<template>
    <div :style="{ background: availableAmount <= 0 ? 'rgba(255, 0, 0, 0.5)' : '' }" class="md:mx-24 lg:mx-48 xl:mx-60">
        <div>
            <div class="flex justify-between p-1 pt-2">
                <p class="px-1">{{ author }}</p>
                <div class="px-1"> ({{ year }})</div>
            </div>
            <div class="pb-1">
                <p v-if="availableAmount <= 0 && !isLended" class=" text-center text-3xl font-bold">Slutsålt</p>
                <p class=" text-center text-2xl font-bold">{{ title }}</p>

            </div>

        </div>

        <div id="bookImg" class="flex justify-center">
            <img class="w-2/3 rounded-lg shadow-md shadow-black " :src="imageURL" alt="">
        </div>
        <div class="flex justify-between p-2 shadow">
            <div id="avalability" class="m-2 text-lg font-bold" :key="id">
                {{ availableAmount }}/{{ totalAmount }}
            </div>
            <button v-if="availableAmount > 0 && !isLended" @click="lendBook()" class=" w-3/4">Låna</button>
            <button v-if="isLended" @click="ReturnBook()" class=" w-3/4 bg-red-500">Lämna Tillbaka</button>

        </div>

        <div id="bookInfo">

            <div class="shadow p-1.5 flex justify-between">
                <p>Genres</p>
                <ul class="flex">
                    <li v-for="genre in genres">{{ genre }} </li>

                </ul>

            </div>
            <div class="shadow p-1 flex justify-around">
                <div class="">Typ</div>


                <div>{{ language }}</div>


            </div>

            <div class="flex justify-around mx-2 text-lg">
                <div class=" my-auto p-1 flex">Pages
                    <div class=" mx-5">{{ pages }}</div>
                </div>

                <div class="">{{ rating }}/5 Betyg</div>

            </div>


        </div>
        <div class="px-2.5 pb-5 text-sm">
            {{ description }}

        </div>

        <div class="flex justify-center">
            <button @click="removeBook()" class="bg-red-500 px-16 py-2">Ta bort</button>
        </div>
        <div>


        </div>
    </div>
</template>

<script setup>

import { ref, computed, watch } from 'vue'
import Books from "../classes/Books.js"


const bookshelf = useBookshelfStore()
const { $bookshelf } = useNuxtApp()
const route = useRoute() // This is a Vue Router function 

const books = ref(bookshelf.books)
const thisBook = ref(null)

const title = ref("")
const author = ref("")
const year = ref(0)
const pages = ref(null)
const copies = ref(null)
const genres = ref([])
const language = ref("svenska")
const format = ref("")
const rating = ref(0)
const description = ref("Skriv Beskrvning här")
const imageURL = ref("https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg")

const totalAmount = ref(0)
const availableAmount = ref(0)

const id = ref(0)

var isLended = ref(false)



$bookshelf.read()
    .then(json => {

        bookshelf.fromJSON(json)

        books.value = bookshelf.books
        for (const book of books.value) {

            if (book.id == route.params.slug) {
                thisBook.value = book
                console.log(thisBook.value)

                totalAmount.value = thisBook.value.value.totalAmount
                availableAmount.value = thisBook.value.value.availableAmount

                title.value = thisBook.value.value.book.title
                author.value = thisBook.value.value.book.author
                year.value = thisBook.value.value.book.year
                pages.value = thisBook.value.value.book.pages
                copies.value = thisBook.value.value.book.copies
                genres.value = thisBook.value.value.book.genres
                language.value = thisBook.value.value.book.language
                format.value = thisBook.value.value.book.format
                rating.value = thisBook.value.value.book.rating
                description.value = thisBook.value.value.book.description
                imageURL.value = thisBook.value.value.book.imageURL

                id.value = thisBook.value.value.id

                console.log(title.value)
            }



        }

    })
    .catch(error => {
        console.log(error)
        console.log(console.log(thisBook))
    })

function lendBook() {
    isLended.value = true
    console.log(thisBook.value)
    bookshelf.lendBook(thisBook.value)
    availableAmount.value -= 1
    $bookshelf.write(bookshelf.toJSON())
}
function ReturnBook() {
    isLended.value = false
    bookshelf.returnBook(thisBook.value)
    availableAmount.value += 1
    $bookshelf.write(bookshelf.toJSON())
}
function removeBook() {
    bookshelf.removeBooks(thisBook.value)
    $bookshelf.write(bookshelf.toJSON())
    navigateTo({ path: "/" })
}








</script>