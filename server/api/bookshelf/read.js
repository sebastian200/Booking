import { fromNodeMiddleware } from 'h3'
import fs from 'fs'

export default fromNodeMiddleware(async function handle(req, res) {
  const jsonFile = "data/bookshelf.json"

  return fs.promises.readFile(jsonFile, "utf-8").then((data) => {
    try {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(JSON.parse(data)))
    }
    catch(error) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: "Could not read json file" }))
    }
  }).catch(error => {
    console.log(error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: "Could not read json file" }))
  })
})
