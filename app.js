const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log("Hello")
  res.send('App is running and fine')
})

const port = 3000
app.listen(port, () => {
  console.log('Server started on', port)
})
