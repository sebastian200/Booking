<template>
    <div>
        <form action="">
            <input type="file" @change="handleFileChange" accept="image/*">
            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image">

            <div>{{ title }}</div>
    

            <input type="text" placeholder="Titel" v-model="title">
            <input type="text" placeholder="Författare">

            <div>
                <input type="number" min="1900" max="2099" step="1" placeholder="år"/>
                <input type="number" placeholder="Copies">
                <input type="number" placeholder="Pages">
            </div>

            <Genres/>

            <div></div>

            <select v-model="bookType" >
                <option value="">Type</option>
                <option value="pocket">Pocket</option>
                <option value="hardcover">Hardcover</option>
            </select>
            <div class="flex justify-center">
                <button>Lägg till</button>
            </div>
            
            
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const imageUrl = ref(null);
const bookType = ref('');

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};
</script>
        

