<style scoped >
li {
    @apply bg-green-300 px-2 rounded-full border-solid border-black mx-1;
}
</style>

<template>
    <div>
        <div>
            <div class="flex justify-between p-1 pt-2">
                <p class="px-1">Jonas Öster</p>
                <div class="px-1"> (2994)</div>
            </div>
            <div class="pb-1">
                <p class=" text-center text-2xl font-bold">Sagon om Ringen</p>
            </div>


        </div>

        <div id="bookImg" class="flex justify-center">
            <img class="w-2/3 rounded-lg shadow-md shadow-black border"
                src="/assets/Images/booksImmages/nedladdning (1).jpg" alt="">
        </div>
        <div class="flex justify-between p-2 shadow">
            <div id="avalability" class="m-2">
                9/10
            </div>
            <button class=" w-3/4">Låna</button>

        </div>

        <div id="bookInfo">

            <div class="shadow p-1.5 flex justify-between">
                <p>Genres</p>
                <ul class="flex">
                    <li>tets</li>
                    <li>tets</li>
                    <li>tets</li>
                </ul>

            </div>
            <div class="shadow p-1 flex justify-between">
                <div class="">Typ</div>

                <div>språk</div>
                <div></div>


            </div>

            <div class="flex justify-between">
                <div class=" my-auto p-1">Pages</div>
                <img class="h-14" src="/assets/Images/stars-customer-reviews-illustration-png.webp" alt="">

            </div>


        </div>
        <div class="px-2.5 pb-5 text-sm">
            Plötsligt händer det märkliga ting i den lilla staden! Mystiska stjärnskott på himlen och svärmar av ugglor mitt
            på dagen, katter som läser kartor och underliga människor som står i gathörnen och viskar. De viskar om en viss
            Harry Potter ...
            <p>

                Föräldralöse Harry Potter bor hos sina elaka styvföräldrar och deras vidrige son. En helt ny värld öppnar
                sig för Harry när det visar sig att han egentligen är en trollkarl och börjar Hogwarths Skola för Häxkonster
                och Trolldom, en värld full av magi och spännande äventyr!


            </p>

        </div>
    <div>


    </div>
</div></template>

<script setup>

import { ref, computed } from 'vue'



const route = useRoute() // This is a Vue Router function 





</script>