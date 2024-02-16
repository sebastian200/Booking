import fs from 'fs'

export default defineEventHandler(async (event) => {
  let res = event.node.res

  var body = await readBody(event)

  const jsonFile = "data/books.json"
  const dataToWrite = body

  console.log("dataToWrite: ", JSON.stringify(dataToWrite))

  return fs.promises.writeFile(jsonFile, JSON.stringify(dataToWrite), "utf-8").then(() => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ success: "Data written to json file" }))
  }).catch(error => {
    console.log(error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: "Could not write to json file" }))
  })
})
