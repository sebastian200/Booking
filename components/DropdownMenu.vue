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

        <div class="shadow p-4 flex justify-center invisible">
            <button class="px-4">Lägg till bok</button>
        </div>
        <div class="flex justify-around p-4">
            <div>
                <button>Logga in</button>
            </div>
            <div>
                <button>Registrera dig</button>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
import BookCardLended from './BookCardLended.vue';


</script>