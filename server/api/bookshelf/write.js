import { fromNodeMiddleware } from 'h3'
import fs from 'fs'

export default fromNodeMiddleware(async function handle(req, res) {
  const jsonFile = "data/bookshelf.json"
  const dataToWrite = req.body

  console.log("dataToWrite: ", dataToWrite)

  return fs.promises.writeFile(jsonFile, dataToWrite, "utf-8").then(() => {
    try {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: "Data written to json file" }))
    }
    catch(error) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: "Could not write to json file" }))
    }
  }).catch(error => {
    console.log(error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: "Could not write to json file" }))
  })
})
