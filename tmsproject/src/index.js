const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is About Page')
})

app.post('/submit', (req, res) => {
  const data = req.body
  console.log('Received POST data:', data)
  let response  = { message: 'Data received successfully', receivedData: data };

      res.send(response)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
