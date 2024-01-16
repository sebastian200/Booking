<template>
  <div>
    <p>{{ suggestionsStore.$state }}</p>
  </div>
</template>

<script setup>
const suggestionsStore = useSuggestionsStore()

useFetch("/api/suggestions/read").then(({data: readData, error: readError}) => {
  console.log(readData)
  try {
    suggestionsStore.$state = JSON.parse(readData)
  }
  catch(error) {
    console.log("Could not deserialize suggestionsStore")
  }
})

suggestionsStore.$subscribe((mutation, state) => {
  console.log("suggestionsStore state: ", state)

  /*
  useFetch("/api/suggestions/write", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(state)
  }).then(({data: writeData, error: writeError}) => {
    console.log(writeData)
  })
  */
})
</script>
