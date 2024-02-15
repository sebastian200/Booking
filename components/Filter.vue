
<template>
  <div class="p-2 rounded-lg bg-slate-50">
    <form @submit.prevent="submitForm">
      <div id="title">
        <p>Titel</p>
        <input type="text" v-model="title">
      </div>
      <div id="Author">
        <p>Författare</p>
        <input type="text" v-model="author">
      </div>
      <div id="format">
        <!-- Add your format input here -->
      </div>
      <div id="genres">
        <p>Genres</p>
        <Genres v-model="selectedGenres"/>
      </div>
      <div id="languages">
        <p>Språk</p>
        <select v-model="selectedLanguage">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="italian">Italian</option>
        </select>
      </div>
      <div>
        <div>Sidor</div>
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
      <div>
        <div>År</div>
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

<div id="rating">
  <p>Betyg</p>
  <div class="rating-slider flex">
    <input type="range" min="0" max="5" step="0.5" v-model="rating" /> 
    <div class="rating-label">{{ rating }}</div>
  </div>
</div>
      <div ></div>

      <div class="flex justify-center">
        <button class="border px-5 shadow-lg" type="submit">Sök</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import the EventBus
const props = defineProps(['data']);

let title = ref(props.data.title);
let author = ref(props.data.author);
let selectedGenres = ref(props.data.genres);
let selectedLanguage = ref(props.data.language);
let minPages = ref(props.data.minPages);
let maxPages = ref(props.data.maxPages);
let minYear = ref(props.data.minYear);
let maxYear = ref(props.data.maxYear);
let rating = ref(props.data.rating);

const emit = defineEmits([
'submit',
])

console.log(title)







function submitForm() {
  const formData = {
    title: title.value,
    author: author.value,
    genres: selectedGenres.value,
    language: selectedLanguage.value,
    minPages: minPages.value,
    maxPages: maxPages.value,
    minYear: minYear.value,
    maxYear: maxYear.value,
    rating: rating.value,
  };



  // Emit the form data to the parent component
  // You can use an event bus or emit it directly to the parent component using $emit
  

  emit('submit', formData);
}
</script>

<style>
/* Add your custom styles here */
</style>
      






