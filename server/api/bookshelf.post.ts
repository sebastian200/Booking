import fs from 'fs'

export default defineEventHandler(async (event) => {
  let res = event.node.res

  var body = {}

  try {
    body = await readBody(event)
  }
  catch(error) {
    console.log('Error reading body:', error)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({ error: "Could not read request body" }))
  }

  const jsonFile = "data/bookshelf.json"
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
