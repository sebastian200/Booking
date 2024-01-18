import fs from 'fs'

export default defineEventHandler(async (event) => {
  const res = event.node.res

  const jsonFile = "data/suggestions.json"

  return fs.promises.readFile(jsonFile, "utf-8").then((data) => {
    try {
      let jsonData = JSON.parse(data)

      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(jsonData))
    }
    catch(error) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: "Json file not correctly formatted" }))
    }
  }).catch(error => {
    console.log(error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: "Could not read json file" }))
  })
})
