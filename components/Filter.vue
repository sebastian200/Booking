
<template>
  <div class="border p-2 rounded-lg bg-slate-600">
    <form action="">
      <div id="title">
        <p>Titel</p>
        <input type="text">
      </div>
      <div id="Author">
        <p>Författre</p>
        <input type="text">
      </div>
      <div id="format">

      </div>
      <div id="genres">
        <p>Genres</p>
        <Genres/>
      </div>
      <Slider/>
      <div class="flex justify-center">
      <button class=" border px-5 shadow-lg">Sök</button>
    </div>
      
    </form>
  </div>
</template>

<script>

</script>

<style>
/* Add your custom styles here */
</style>



