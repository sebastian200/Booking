export default defineNuxtPlugin(nuxtApp => {
  const apiUrl = "/api/suggestions"

  const read = async () => {
    return fetch(apiUrl, {
      method: "GET"
    })
    .then(response => response.json())
  }

  const write = async (json) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json),
    })
    .then(response => response.json())
  }

  nuxtApp.provide("suggestions", { read, write });
});
