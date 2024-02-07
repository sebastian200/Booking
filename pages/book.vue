<template>
</template>

<script setup>
const books = useBooksStore()

const route = useRoute()

const hash = route.query.hash

const book = books.getBook(hash)

if(hash === undefined || book == null) {
  navigateTo({path: "/"})
}
</script>
