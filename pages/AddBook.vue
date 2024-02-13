<template>
    <div class="">
        <form action="" class=" flex flex-wrap justify-center px-1">
            <input type="file" @change="handleFileChange" accept="image/*">
            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image">

            <div>{{ title }}</div>
    

            <input class="w-full" type="text" placeholder="Titel" v-model="title">
            <input class="w-full" type="name" placeholder="Författare" v-model="author">

            <div class="">
            <div class="flex justify-between">
                <input type="number" min="1900" max="2099" step="1" placeholder="år" v-model="year">
                <select multiple v-model="selectedYears"> <option v-for="year in years" :value="year">{{ year }}</option> </select>
                <input type="number" placeholder="Kopior" v-model="copies">
            </div>
            <div class="flex justify-around">
                <input class="w-1/2" type="text" placeholder="språk" v-model="language">
                <input class="w-1/3" type="number" placeholder="Sidor" v-model="pages">
            </div>
            </div>

            <Genres class="" />

            <div></div>

            <select v-model="bookType" >
                <option value="">Typ</option>
                <option value="pocket">Pocket</option>
                <option value="hardcover">Hardcover</option>
            </select>
            <div class="flex justify-center">
                <div id="button" @click="addBook()">Lägg till</div>
            </div>
            
            
        </form>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Book from "../classes/Book.js"
import Books from "../classes/Books.js"



const { $bookshelf } = useNuxtApp()
const bookshelf = useBookshelfStore()


const years = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => 1900 + i);

const title = ref('');
const author = ref('');
const year = ref(0);
const pages = ref(0);
const copies = ref(0);
const genres = ref([]);
const language = ref('svenska');
const format = ref('');

const imageUrl = ref(null);
const bookType = ref('');

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

function addBook() {

    const newBook = new Book({
        title: title.value,
        author: author.value, 
        year: year.value,
        pages:pages.value, 
        genres: genres.value,
         format: bookType.value,
        language: language.value,
})
    
    const books = new Books({
        book: newBook,
        amount: copies.value
})

    bookshelf.addBooks(books)


}
</script>
        

