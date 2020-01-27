const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ 'tag':'ok'})
})

app.use(express.json())
app.listen(3000)