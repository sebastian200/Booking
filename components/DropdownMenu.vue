<template>
    <div  class="bg-slate-50 bg-opacity-90 h-screen">
        <div></div>
        <div class="shadow p-2 md:p-6 flex justify-center">
            <div class="text-lg font-bold">namn </div>
        </div>
        <div class="shadow">
            <div class="text-center">
                lånade böcker
            </div>
            <li v-for="lendedBook in lendedBooks" >
                <BooksCard />
            </li>
            
            
            
            
            
        </div>
        <div class="shadow p-4 flex justify-center">
            <nuxt-link class="text-center" to="">Inställningar</nuxt-link>
        </div>
        <div class="shadow p-4 flex justify-center ">
            <nuxt-link to="/AddBook"><button class="px-4"  @click="$emit('disabled')">Lägg till bok</button></nuxt-link>
        </div>
        <div class="flex justify-around p-4">
            <div>
                <button><nuxt-link to="">Logga in</nuxt-link></button>
            </div>
            <div>
                <button><nuxt-link to="">Registrera dig</nuxt-link></button>
            </div>
        </div>
    </div>
</template>


<script setup>
var lendedBooks =[]


</script>

