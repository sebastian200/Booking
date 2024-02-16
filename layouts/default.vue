<style></style>

<template>
  <header  class="fixed">
    <div class="w-screen flex justify-around p-1 pr-2 pl-2 h-16 border-solid border-b-2 bg-white">

        <button class="m-0  px-1 shadow" @click="toggleDropdown()">
          <img class="h-full" src="../assets/Images/2232688.png" alt="" />
        </button>
        <div class="invisible"><nuxt-link to="">Booking</nuxt-link></div>

      <div @click="showDropdown = false" class="flex align-middle w-3/5 md:w-auto">
        <div class="m-3"><nuxt-link to="/">Home</nuxt-link></div>
        <div class="m-3"><nuxt-link to="/Suggestions">Suggestions</nuxt-link></div>
      </div>
    </div>
  </header>

  <div v-if="showDropdown">
    <DropdownMenu @disabled="toggleDropdown()" class="fixed z-20 w-screen mt-16 md:w-1/2 lg:w-1/3 xl:w-1/4" />
  </div>

  <main class="page border-solid border-gray-200 border-b-2">
    <div class="h-16"></div>
    <slot />
  </main>

  <footer class="bg-slate-50">
    <div id="supportUs" class="flex justify-around">
      <div class="flex justify-center"></div>
      <div id="swishQrCode" class="w-1/3 md:w-1/4 xl:w-1/12 m-2 my-10">
        <img class="" src="../assets/Images/swish-QR-small.png" alt="" />
      </div>
      <div id="nameAndMail" class="my-auto w-1/2">
        <div class="flex justify-center my-5 bg-slate-300 rounded-lg p-1">
          <p>Sebastian Alin</p>
        </div>
        <div class="my-5 bg-slate-300 rounded-lg p-1 text-center">
          <p>Hampus Fridhom</p>
        </div>
        <div class="flex justify-center my-5 bg-slate-300 rounded-lg p-1">
          <p>Elias Kroon</p>
        </div>
        <div class=" ">
          <div class="flex justify-around border-solid border-gray-200 ">
            <img class="h-9" src="../assets/Images/Facebook_Logo_(2019).png.webp" alt="" />
            <img class="h-9" src="../assets/Images/Instagram_icon.png" alt="" />
            <img
              class="h-9"
              src="../assets/Images/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.webp"
              alt=""
            />
            <img class="h-9" src="../assets/Images/LinkedIn_icon.svg.png" alt="" />
          </div>
        </div>
      </div>
      
    </div>

    <div id="conact">
      
      <div class="border-solid p-4">
        <div id="feedback">
          <form action="" class="flex justify-center">
            <input type="text" placeholder="Leave Feedback Here" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}
</script>

<style>

</style>
