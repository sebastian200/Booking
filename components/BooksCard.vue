
<style>

#BooksCard {
  background-image: url("/assets/images/booksImmages/nedladdning (1).jpg");
}
</style>

<template>
  <div  class="w-1/2">
    <div id="BooksCard" class="border border-solid border-gray-400  rounded-xl m-1 ">
      <div class="p-1 bg-slate-900 rounded-xl bg-opacity-60">
      <div id="bookImmage">
      </div>
      <div id="bookText">
        <p id="title" class=" text-center">title</p>
        <p id="author" class="text-center">author</p>
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
  </div>
</template>



<script setup>

</script>
