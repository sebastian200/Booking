
<style>

#BooksCard {
  background-image: url("/assets/images/booksImmages/nedladdning (1).jpg");
}
</style>

<template>
  <div  class="w-1/2">
    <nuxt-link to="/BookPopup">
    <div id="BooksCard" class="border border-solid border-gray-400 m-1  rounded-md">
      <div class="p-1 bg-slate-50 rounded-md bg-opacity-50">
      <div id="bookImmage">
      </div>
      <div id="bookText">
          <p id="author" class="text-center ">author</p>
        <p id="title" class=" text-center">title</p>
      
      </div>
      <div id="availability" class="flex justify-around">
        <p id="year">year</p>
        <p>8/9</p>
      </div>
      <div class="flex justify-around">
        <button> Lend</button>
        <button> Return</button>
      </div>
    </div>
    </div>
  </nuxt-link>
  </div>
</template>



<script setup>

</script>
