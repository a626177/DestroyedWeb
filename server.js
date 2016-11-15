const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))
app.listen(8866)

app.get('/', (req, res) => {
  res.sendfile('public/index.html')
})

app.get('/ajax', (req, res) => {
  console.log(req.query.id)//印出資料
  res.send(req.query.id + " ajax")
})
