<template>
  <header class="flex justify-between p-1 pr-2 pl-2 h-16 border-solid border-gray-200 border-b-2">
    <div class="flex w-screen ">
      <div>      
        <img class="h-10" src="../assets/Images/—Pngtree—books logo_4135439.png" alt="">
        <nuxt-link to="">Booking</nuxt-link></div>
      <div class="flex justify-center">
        
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/suggestions">Suggestions</nuxt-link>
      </div>
    </div>

  </header>
 
  <main class="h-screen">

    
    <slot />
  </main>
  <footer class="">
  </footer>
</template>
