const express = require('express')
const app = express()
const port = 3000
const path = __dirname + '/view/';

app.get('/', (req, res) => {
  res.sendFile(path + 'index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static("public"));