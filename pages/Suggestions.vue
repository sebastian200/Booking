<template>
  <div>
    <p>{{ suggestionsStore.$state }}</p>
  </div>
</template>

<script setup>
const suggestionsStore = useSuggestionsStore()

useFetch("/api/suggestions/read").then(({data: readData, error: readError}) => {
  try {
    suggestionsStore.deserialize(readData.value)

    suggestionsStore.addSuggestion(useSuggestionStore())

    writeSuggestions()
  }
  catch(error) {
    console.log(error)
    console.log("Could not deserialize suggestionsStore")
  }
})

const { execute: writeSuggestions } = useLazyFetch("/api/suggestions/write", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: suggestionsStore.serialize(),
})
</script>
