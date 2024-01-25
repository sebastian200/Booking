<template>
    
<div class=" bg-slate-50 bg-opacity-90 ">
        <div></div>
        <div class="shadow p-4 md:p-6 flex justify-center" >
            <div>namn </div>

        </div>
        <div class="shadow">
            <div class="text-center">
                lånade böcker
            </div>
            <BookCardLended/>
            <BookCardLended/>
            <BookCardLended/>
        </div>
        <div class="shadow p-4 flex justify-center">
            <nuxt-link class="text-center" to="">Inställningar</nuxt-link>
        </div>

        <div class="shadow p-4 flex justify-center ">
            <nuxt-link to="/AddBook"><button class="px-4">Lägg till bok</button></nuxt-link>
        </div>
        <div class="flex justify-around p-4">
            <div>
                <button><nuxt-link to="/SignInAndUp">Logga in</nuxt-link></button>
            </div>
            <div>
                <button><nuxt-link to="/SignInAndUp">Registrera dig</nuxt-link></button>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import BookCardLended from './BookCardLended.vue';


</script>