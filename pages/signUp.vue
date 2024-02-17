<template>
    <div>
        <div class="p-3 md:px-24 lg:px-60 xl:px-96s">
            <div>
                <p class="text-center font-bold text-lg ">Registrera dig</p>
            </div>
            <form action="">
                <div class="p-1">
                    <div>Förnamn</div>
                    <input type="name" placeholder="skriv ditt förnamn här" class="w-full">
                    <div>Efternamn</div>
                    <input type="name" placeholder="skriv ditt efternamn här" class="w-full">
                </div>
                <div class="p-1">
                    <div>Email</div>
                    <input v-model="email" type=" email" placeholder="skriv din Email här" class="w-full">
                </div>
                <div class="p-1">
                    <div>Lösenord</div>
                    <input type="password" placeholder="skriv ditt lösenord här" class="w-full">
                    <input v-model="password" type="password" placeholder="Confrimera ditt lösenord" class="w-full">
                </div>
                <div @click="signUp()" class="flex justify-center">Registrera dig</div>
                <button>hello
                    tfghfh
                </button>

            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const { $bookshelf } = useNuxtApp()
const { $firebase } = useNuxtApp()

console.log($firebase, $bookshelf)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const signUp = () => {
    $firebase.signUp(email.value, password.value)
}



</script>