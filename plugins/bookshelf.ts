export default defineNuxtPlugin(nuxtApp => {
  const apiUrl = "/api/bookshelf"

  const read = async () => {
    return fetch(apiUrl, {
      method: "GET"
    })
    .then(response => response.json())
  }

  const write = async (suggestions) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(suggestions.toJSON()),
    })
    .then(response => response.json())
  }

  nuxtApp.provide("bookshelf", { read, write });
});
