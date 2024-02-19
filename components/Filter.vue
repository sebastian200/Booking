
<template>
  <div class="  bg-slate-50 ">
    <form @submit.prevent="submitForm">
      <div id="title" class="p-1 md:px-6 px-3 pr-4 shadow hidden">
        <div class="" @click="showTitle = !showTitle">Titel ></div>
        <div class="flex justify-center">
        <input v-if="showTitle" class="w-full md:w-3/4" type="text" placeholder="Skriv titel här" v-model="title">
      </div>
      </div>
      <div id="Author" class="p-1 md:px-6 px-3 pr-4 shadow">
        <p class="" @click="showAuthor = !showAuthor">Författare ></p>
        <div class="flex justify-center">
          <input v-if="showAuthor" class="w-full md:w-3/4" type="text" placeholder="Skriv författare här" v-model="author">
        </div>
        </div>
   
      <div id="genres" class="px-3 md:px-6 p-1 pr-4 shadow ">
        <p @click="showGenres = !showGenres">Genres ></p>
        <Genres v-if="showGenres" v-model="selectedGenres" />
      </div>
      <div class="flex justify-around p-1 px-3 pr-4 shadow">
      <div id="languages">
        <p @click="showAuthor = !showAuthor" >Språk </p>
        <select v-model="selectedLanguage">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
        </select>
      </div>
      <div id="format">
        <p>Format</p>
        <select v-model="format">
          <option value="pocket">Pocket</option>
          <option value="hardcover">Hardcover</option>
        </select>
      </div>
    </div>
      <div id="pages" class="p-1 md:px-6 px-3 pr-4 shadow">
        <div @click="showPages = !showPages" >Sidor ></div>
        <div v-if="showPages" >
        <div class="flex">
          <label for="minPages" class="m-1 text-xs">MinPages</label>
          <input type="range" id="minPages" v-model="minPages" min="0" max="1000" @input="emitSliderValues" />
          <span class="m-1 text-xs">{{ minPages }}</span>
        </div>
        <div class="flex">
          <label for="maxPages" class="m-1 text-xs">MaxPages</label>
          <input type="range" id="maxPages" v-model="maxPages" min="0" max="1000" @input="emitSliderValues" />
          <span class="m-1 text-xs">{{ maxPages }}</span>
        </div>
      </div>
      </div>
      <div id="år" class="shadow md:px-6 p-1 px-3 pr-4">
        <div @click="showYear = !showYear" >År ></div>
        <div v-if="showYear">
        <div class="flex">
          <label for="minPages" class="m-1 text-xs">Min</label>
          <input type="range" id="minPages" v-model="minYear" min="1900" max="2023" @input="emitSliderValues" />
          <span class="m-1 text-xs">{{ minYear }}</span>
        </div>
        <div class="flex">
          <label for="maxPages" class="m-1 text-xs">Max</label>
          <input type="range" id="maxPages" v-model="maxYear" min="1900" max="2023" @input="emitSliderValues" />
          <span class="m-1 text-xs">{{ maxYear }}</span>
        </div>
      </div>
      </div>

      <div id="rating" class="shadow md:px-6 p-1 px-3 pr-4">
        <p @click="showRating = !showRating">Betyg ></p>
        <div v-if="showRating" class="rating-slider flex">
          <input type="range" min="0" max="5" step="0.5" v-model="rating" />
          <div class="rating-label">{{ rating }}</div>
        </div>
      </div>


      <div class="flex justify-center">
        <button class="border px-5 shadow-lg bg-blue-400" type="submit">Sök</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import the EventBus
const props = defineProps(['data']);

const showTitle = ref(false)
const showAuthor = ref(false)
const showGenres = ref(false)
const showLanguage = ref(false)
const showPages = ref(false)
const showRating = ref(false)
const showYear = ref(false)



let title = ref(props.data.title);
let author = ref(props.data.author);
let selectedGenres = ref(props.data.genres);
let selectedLanguage = ref(props.data.language);
let minPages = ref(props.data.minPages);
let maxPages = ref(props.data.maxPages);
let minYear = ref(props.data.minYear);
let maxYear = ref(props.data.maxYear);
let rating = ref(props.data.rating);
let format = ref(props.data.format);

const emit = defineEmits([
  'submit',
])








function submitForm() {
  const formData = {
    title: title.value,
    author: author.value,
    format: format.value,
    genres: selectedGenres.value,
    language: selectedLanguage.value,
    minPages: minPages.value,
    maxPages: maxPages.value,
    minYear: minYear.value,
    maxYear: maxYear.value,
    rating: rating.value,
  };

console.log(formData)


  // Emit the form data to the parent component
  // You can use an event bus or emit it directly to the parent component using $emit


  emit('submit', formData);
}
</script>

<style>
/* Add your custom styles here */
</style>
      






