const express = require('express')
const app = express()
const path = require("path")
const port = 8000

// app.use('/static', express.static('dist'))
// app.use(express.static(path.join(__dirname, 'dist/img/*')))
app.use('/dist', express.static(path.join(__dirname, '/dist')))
app.use('/src', express.static(path.join(__dirname,'/src')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})