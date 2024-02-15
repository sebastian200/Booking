

<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const searchQuery = ref('');
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Mango' },
    ];

    const filteredItems = computed(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
</script>

<style></style>