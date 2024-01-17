<template>
  <div>
    <p>{{ suggestions.$state }}</p>
  </div>
</template>

<script setup>
const suggestions = useSuggestionsStore()

useFetch("/api/suggestions/read").then(({data: readData, error: readError}) => {
  try {
    suggestions.fromJSON(readData.value)

    writeSuggestions()
  }
  catch(error) {
    console.log(error)
    console.log("Could not deserialize suggestions")
  }
})

const { execute: writeSuggestions } = useLazyFetch("/api/suggestions/write", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: suggestions.toJSON(),
})
</script>
