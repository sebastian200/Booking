<template>
    <div class="">
        <form action="" class="px-3 md:px-20 lg:px-20 xl:px-96 pb-5  ">
            <div class="p-2">
                <div class="flex justify-center  ">
                    <input class="" type="file" @change="handleFileChange" accept="image/*" />
                </div>
                <div class="flex justify-center">
                    <img class="rounded-xl shadow w-2/3 md:w-1/2 xl:w-1/3" v-if="imageURL" :src="imageURL"
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
                <input class="w-full md:w-2/3 " type="text" placeholder="Skriv titel här" v-model="title" />
            </div>
                <div>Författre</div>
                <div class="flex justify-center">
                <input class="w-full md:w-2/3 " type="name" placeholder="Skriv Författar här" v-model="author" />
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
                <div id="button" class="p-4" @click="addBook()">Lägg till</div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Book from "../classes/Book.js";
import Books from "../classes/Books.js";

const { $bookshelf } = useNuxtApp();
const bookshelf = useBookshelfStore();

const years = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => 1900 + i);

const title = ref("");
const author = ref("");
const year = ref(0);
const pages = ref(null);
const copies = ref(null);
const genres = ref([]);
const language = ref("svenska");
const format = ref("");
const rating = ref(0);
const description = ref("Skriv Beskrvning här");

const imageURL = ref(
    "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
);
const bookType = ref("");

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
        pages: pages.value,
        genres: genres.value,
        format: bookType.value,
        language: language.value,
        imageURL: imageURL.value,
        rating: rating.value,
        description: description.value,
    });

    const books = new Books({
        book: newBook,
        amount: copies.value,
    });

    bookshelf.addBooks(books);
}
</script>
