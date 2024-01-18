import { fromNodeMiddleware, readBody } from 'h3'
import fs from 'fs'

export default fromNodeMiddleware(async function handle(req, res) {
  console.log("req: ", req)
  console.log("API method: ", req.method)

  const jsonFile = "data/suggestions.json"
  let dataToWrite;

  try {
    let body;
    if (process.env.NODE_ENV === "development") {
      body = await readBody(req);
    } else {
      body = req.body;
    }
    dataToWrite = body;
  } catch (error) {
    console.log("req.body: ", req.body)
    console.log('Error reading body:', error)
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify({ error: "Could not read request body" }))
  }

  console.log("dataToWrite: ", dataToWrite)

  return fs.promises.writeFile(jsonFile, JSON.stringify(dataToWrite), "utf-8").then(() => {
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
