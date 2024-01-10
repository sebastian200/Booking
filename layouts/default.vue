<template>
  <header class="flex justify-around p-1 pr-2 pl-2 h-16 border-solid border-gray-200 border-b-2">

      <div class="flex m-1">      
        <img class="h-full " src="../assets/Images/2232688.png" alt="">
        <div class=" invisible"><nuxt-link to="">Booking</nuxt-link></div>
      </div>
      <div class="flex align-middle">
        
        <div class=" m-3"><nuxt-link to="../pages/index.vue">Home</nuxt-link></div>
        <div class="m-3"><nuxt-link to="">Suggestions</nuxt-link></div>
      </div>


  </header>
 
  <main class="h-screen">

    
    <slot />
  </main>
  <footer class="">
  </footer>
</template>
