<template>
  <div>
    <p>{{ bookshelf.$state }}</p>
  </div>
</template>

<script setup>
const bookshelf = useBookshelfStore()

useFetch("/api/bookshelf/read").then(({data: readData, error: readError}) => {
  try {
    bookshelf.fromJSON(readData.value)

    writeBookshelf()
  }
  catch(error) {
    console.log(error)
    console.log("Could not deserialize bookshelf")
  }
})

const { execute: writeBookshelf } = useLazyFetch("/api/bookshelf/write", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: bookshelf.toJSON(),
})
</script>
