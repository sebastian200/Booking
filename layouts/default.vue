<style>
  
</style>


<template>
  <header>
  <div class="flex justify-around p-1 pr-2 pl-2 h-16 border-solid border-b-2 ">
    <div class="flex m-1">
      <img class="h-full" src="../assets/Images/2232688.png" alt="" />
      <div class="invisible"><nuxt-link to="">Booking</nuxt-link></div>
    </div>
    <div class="flex align-middle">
      
      <div class="m-3"><nuxt-link to="/">Home</nuxt-link></div>
      <div class="m-3"><nuxt-link to="/Suggestions">Suggestions</nuxt-link></div>

    </div>

  </div>
  <DropdownMenu class=" fixed w-screen"/>
</header>

  <main class="page border-solid border-gray-200 border-b-2">
    <slot />
  </main>
  <footer class="page">
    <div id="supportUs">
      <div class="flex justify-center">
        <p>Support Us!</p>
      </div>
      <div id="swishQrCode" class="flex justify-center"><img class=" w-2/3" src="../assets/Images/swish-QR-small.png"
          alt="" /></div>
    </div>
    <div id="feedback">
      <p class=" text-center m-4">Feedback</p>
      <form action="" class="flex justify-center">
        <input type="text" placeholder="Leave Feedback Here">
        <input type="submit" value="Submit">
      </form>
    </div>
    <div id="conact">
      <div id="nameAndMail">
        <div class="flex justify-center"><p>Sebastian ✉</p> <p>Alin.Sebastia@gmail.com</p> </div>
        <div><p>Hampus</p></div>
        <div><p>Elias</p></div>
      </div>
      
      <div class="flex justify-around p-4 border-solid border-gray-200 border-b-2">
        <img class="h-9" src="../assets/Images/Facebook_Logo_(2019).png.webp" alt="" />
        <img class="h-9" src="../assets/Images/Instagram_icon.png" alt="" />
        <img class="h-9" src="../assets/Images/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.webp" alt="" />
        <img class="h-9" src="../assets/Images/LinkedIn_icon.svg.png" alt="">
      </div>
      <div class="h-12 border-solid border-gray-200 border-b-2">

      </div>
    </div>
  </footer>
</template>
