<!-- This components only shows if it represents an existing suggestion -->
<template>
  <div v-if="suggestion && book && hash" class="flex justify-between bg-gray-200 m-4">
    <NuxtLink :to="`book?hash=${hash}`" class="flex justify-start items-center">
      <img :src="`images/books/${book?.getImage() ?? 'missing.png'}`" class="size-16 aspect-square object-cover m-2"/>
      <div class="flex flex-col justify-start space-y-0 m-4">
        <p class="text-lg font-bold">{{ book?.getTitle() }}</p>
        <p class="text-md">{{ book?.getAuthor() }}</p>
      </div>
    </NuxtLink>
    <div class="flex justify-end">
      <div class="flex justify-between space-x-6 items-center m-4">
        <img @click="upvoteSuggestion" src="/images/plus.png" class="size-10 aspect-square object-cover hover:cursor-pointer" />
        <p class="text-4xl">{{ suggestion.getVotes() }}</p>
        <img @click="downvoteSuggestion" src="/images/minus.png" class="size-10 aspect-square object-cover hover:cursor-pointer" />
      </div>
      <div class="flex items-center m-4">
        <img @click="removeSuggestion" src="/images/remove.png" class="size-8 aspect-square object-cover hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { suggestion } = defineProps([
  "suggestion"
])

const emit = defineEmits([
  "remove",
  "upvote",
  "downvote"
])

const book = suggestion ? suggestion.getBook() : null
const hash = book       ? book.getHash()       : null

const upvoteSuggestion = () => {
  emit("upvote", hash)
}

const downvoteSuggestion = () => {
  emit("downvote", hash)
}

const removeSuggestion = () => {
  emit("remove", hash)
}
</script>
