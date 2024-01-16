
<style>

.BooksCard {
  background-image: url("/assets/images/booksImmages/nedladdning (1).jpg");
}
</style>

<template>
  <div id="BooksCard" class="w-1/2">
    <div class="shadow border-solid border-gray-400 p-2 rounded-md m-1.5 ">
      <div id="bookImmage">
        <img src="../assets/Images/booksImmages/nedladdning (1).jpg" alt="">
      </div>
      <div id="bookText">
        <p id="title">title</p>
        <p id="author">author</p>
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
</template>



<script setup>

</script>
