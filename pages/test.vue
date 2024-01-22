<template>
    <div>
      <div class="min-max-slider" data-legendnum="2">
        <label for="min">Minimum price</label>
        <input id="min" class="min" type="range" step="1" min="0" max="3000" v-model="minValue" />
        <label for="max">Maximum price</label>
        <input id="max" class="max" type="range" step="1" min="0" max="3000" v-model="maxValue" />
      </div>
      <!-- Repeat for other slider if needed -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minValue: 0,
        maxValue: 3000,
        thumbsize: 14
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // Your initialization logic here
      },
      draw() {
        // Your draw logic here
      },
      update() {
        // Your update logic here
      }
    },
    watch: {
      minValue(newVal, oldVal) {
        // Your logic when minValue changes
        this.update();
      },
      maxValue(newVal, oldVal) {
        // Your logic when maxValue changes
        this.update();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS goes here */
  </style>