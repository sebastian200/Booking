<template>
  <div class="flex justify-between bg-gray-200 m-4">
    <div class="flex justify-start items-center">
      <img :src="`images/books/${bookImage}`" class="size-16 aspect-square object-cover m-2"/>
      <div class="flex flex-col justify-start space-y-0 m-4">
        <p class="text-lg font-bold">{{ book.getTitle() }}</p>
        <p class="text-md">{{ book.getAuthor() }}</p>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="flex justify-between space-x-6 items-center m-4">
        <img @click="upvote" src="/images/plus.png" class="size-10 aspect-square object-cover hover:cursor-pointer" />
        <p class="text-4xl">{{ suggestion.value.getVotes() }}</p>
        <img @click="downvote" src="/images/minus.png" class="size-10 aspect-square object-cover hover:cursor-pointer" />
      </div>
      <div class="flex items-center m-4">
        <img @click="removeSuggestion" src="/images/remove.png" class="size-8 aspect-square object-cover hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive
} from "vue"

const { suggestion } = defineProps([
  "suggestion"
])

console.log("SuggestionCard: ", suggestion)

const emit = defineEmits([
  "remove",
  "upvote",
  "downvote"
])

const book = suggestion.value.getBook()

const bookImage = ref("harry potter.jpg")

const upvote = () => {
  emit("upvote", suggestion)
}

const downvote = () => {
  emit("downvote", suggestion)
}

const removeSuggestion = () => {
  emit("remove", suggestion)
}
</script>
