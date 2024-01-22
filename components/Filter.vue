<!-- FILEPATH: /c:/Users/22sebali/Desktop/Programering/projekt/Booking/components/Filter.vue -->
<template>
  <div>
    <form action="">
      <div id="title">
        <p>Titel</p>
        <input type="text">
      </div>
      <div id="Author">
        <p>Författre</p>
        <input type="text">
      </div>
      <div id="format">

      </div>
      <div id="genres">
        <p>Genres</p>
        <Genres/>
      </div>
      <div id="price-range">
        <p>Price Range</p>
        <input type="number" v-model="minPrice" placeholder="Min Price">
        <input type="number" v-model="maxPrice" placeholder="Max Price">
        <input type="range" v-model="selectedPrice" min="0" :max="maxPrice" step="1">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPages: 0,
      minPages: 0,
      maxPages: 1000,
      minPrice: 0,
      maxPrice: 1000,
      selectedPrice: 0
    };
  }
};
</script>

<style>
/* Add your custom styles here */
</style>



