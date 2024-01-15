<template>
  <header class="flex justify-around p-1 pr-2 pl-2 h-16 border-solid border-gray-200 border-b-2">
    <div class="flex m-1">
      <img class="h-full" src="../assets/Images/2232688.png" alt="" />
      <div class="invisible"><nuxt-link to="">Booking</nuxt-link></div>
    </div>
    <div class="flex align-middle">
      <div class="m-3"><nuxt-link to="../pages/index.vue">Home</nuxt-link></div>
      <div class="m-3"><nuxt-link to="">Suggestions</nuxt-link></div>
    </div>
  </header>

  <main class="h-screen">
    <slot />
  </main>
  <footer class="">
    <div id="supportUs">
      <div class="flex justify-center m-4">
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
        <div><p class="text-center">Sebastian Alin.Sebastia@gmail.com</p> </div>
        <div><p>Hampus</p></div>
        <div><p>Elias</p></div>
      </div>
      
      <div class="flex">
        <img src="../assets/Images/" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="">
      </div>
      <div></div>
    </div>
  </footer>
</template>
