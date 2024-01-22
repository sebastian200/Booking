
<style>
.price-range-slider {
    width: 300px;
  }
  
  input[type=range] {
    width: calc(100% - 60px);
  }
  

</style>

<template>
    <div id="app">
      <div class="price-range-slider">
        <label>Price Range</label>
        <input type="range" v-model="minPrice" :max="maxPrice" />
        <input type="range" v-model="maxPrice" :min="minPrice"/>
        Min: {{ minPrice }} - Max: {{ maxPrice }}
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        minPrice: 0,
        maxPrice: 10000,
      };
    },
  };
  </script>
  