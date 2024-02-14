<template>
  
  <div>
    <div>{{ title }}</div>
    <div class="flex">
      <label for="minPages" class="m-1 text-xs">Min</label>
      <input type="range" id="minPages" v-model="min" min="0" max="1000" @input="emitSliderValues" />
      <span class="m-1 text-xs">{{ min }}</span>
    </div>
    <div class="flex">
      <label for="maxPages" class="m-1 text-xs">Max</label>
      <input type="range" id="maxPages" v-model="max" min="0" max="1000" @input="emitSliderValues" />
      <span class="m-1 text-xs">{{ max }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import { defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Slider Component',
  },
});

const min = ref(0);
const max = ref(1000);

function emitSliderValues() {
  // Emit the slider values
  // You can replace 'slider-values-changed' with your desired event name
  // and pass any additional data you want
  const sliderValues = {
    min: min.value,
    max: max.value,
  };


  const emit = defineEmits(['slider-values-changed']);

  emit('slider-values-changed');
  console.log(sliderValues);
}

// Watch for changes in min and max values
watch([min, max], () => {
  emitSliderValues();
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
  

