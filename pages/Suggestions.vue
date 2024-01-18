<template>
  <div>
    <p>{{ suggestions.$state }}</p>
  </div>
</template>

<script setup>
import Suggestion from "../classes/Suggestion.js"
import Book from "../classes/Book.js"

const suggestions = useSuggestionsStore()

useFetch("/api/suggestions/read").then(({data: readData, error: readError}) => {
  // Only run this code once, on the client-side
  if(process.client) {
    try {
      suggestions.fromJSON(readData.value)

      const suggestion = new Suggestion({ book:new Book({ title:"Harry Potter", genres:["action"] }) })

      suggestions.addSuggestion(suggestion)

      writeSuggestions(suggestions)
    }
    catch(error) {
      console.log(error)
      console.log("Could not deserialize suggestions")
    }
  }
})

async function writeSuggestions(suggestions) {
  console.log(JSON.stringify(suggestions.toJSON()))

  const response = await fetch("/api/suggestions/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(suggestions.toJSON()),
  })

  if (!response.ok) {
    console.error('HTTP-Error: ', response.status);
    console.error('Response object: ', response);
  } else {
    try {
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error parsing response as JSON:', error);
    }
  }
}
</script>
