<style></style>


<template>
  <header class=" fixed">
    <div class="w-screen flex justify-around p-1 pr-2 pl-2 h-16 border-solid border-b-2 bg-white ">
      <div class="flex">
        <button class="m-0 shadow" @click="toggleDropdown()">
          <img class="h-full" src="../assets/Images/2232688.png" alt="" />
        </button>
        <div class="invisible"><nuxt-link to="">Booking</nuxt-link></div>
      </div>
      <div class="flex align-middle">

        <div class="m-3"><nuxt-link to="/">Home</nuxt-link></div>
        <div class="m-3"><nuxt-link to="/Suggestions">Suggestions</nuxt-link></div>

      </div>

    </div>
    <div v-if="showDropdown">
      <DropdownMenu @disable="toggleDropdown()" class=" fixed w-screen" />
    </div>
  </header>

  <main class="page border-solid border-gray-200 border-b-2">
    <div class="h-16"></div>
    <slot />
  </main>
  <footer class=" bg-slate-100 ">

    <div id="supportUs" class="flex justify-around">
      <div class="flex justify-center">

      </div>
      <div id="swishQrCode" class="w-1/2 m-2 my-10">

        <img class=" " src="../assets/Images/swish-QR-small.png" alt="" />
        
      </div>
          <div id="nameAndMail" class="m-auto">
            <div class="flex justify-center my-5 bg-slate-200 rounded-lg p-0.5">
              <p>Sebastian Alin</p>

            </div>
            <div class="my-5  bg-slate-200 rounded-lg p-0.5">
              <p>Hampus Fridhom</p>
            </div>
            <div class="flex justify-center my-5  bg-slate-200 rounded-lg p-0.5">
              <p>Elias Kroon</p>
            </div>
          </div>
    </div>

    <div id="conact">


      <div class="flex justify-around p-4 border-solid border-gray-200 border-b-2">
        <img class="h-9" src="../assets/Images/Facebook_Logo_(2019).png.webp" alt="" />
        <img class="h-9" src="../assets/Images/Instagram_icon.png" alt="" />
        <img class="h-9"
          src="../assets/Images/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.webp"
          alt="" />
        <img class="h-9" src="../assets/Images/LinkedIn_icon.svg.png" alt="">
      </div>
      <div class="border-solid p-4">
        <div id="feedback">
          <form action="" class="flex justify-center">
            <input type="text" placeholder="Leave Feedback Here">
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
