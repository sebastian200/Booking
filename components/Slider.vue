<template>
  <div>
    <div >Sidor</div>
    <div class="flex">
      <label for="minPages" class="m-1 text-xs">Min</label>
      <input type="range" id="minPages" v-model="min" min="0" max="1000" />
      <span class="m-1 text-xs">{{ min }}</span>
    </div>
    <div class="flex">
      <label for="maxPages" class="m-1 text-xs">Max</label>
      <input type="range" id="maxPages" v-model="max" min="0" max="1000" />
      <span class="m-1 text-xs">{{ max }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0,
      max: 1000,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
