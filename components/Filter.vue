
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
      <Slider title="Sidor" v-model="pages"/>
      <Slider title="År" v-model="Year"/>

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

const title = ref('');
const author = ref('');
const selectedGenres = ref([]);
const selectedLanguage = ref('english');
const pages = ref(0);
const year = ref(1900);
const rating = ref(0);



function submitForm() {
  const formData = {
    title: title.value,
    author: author.value,
    genres: selectedGenres.value,
    language: selectedLanguage.value,
    pages: pages.value
  };

  // Emit the form data to the parent component
  // You can use an event bus or emit it directly to the parent component using $emit
  this.$emit('formSubmitted', formData);
  

  // Example using event bus:
  // EventBus.$emit('formSubmitted', formData);

  // Example using $emit:
  // this.$emit('formSubmitted', formData);
}
</script>

<style>
/* Add your custom styles here */
</style>
      






