const express = require('express') //express加進來
const app = express()//使用他
app.use(express.static(__dirname + '/public'))
app.listen(7788)

var store = []
var fs = require('fs')
app.get('/', (req, res) => {//一條斜線的門
  res.sendFile('public/non.html')
})

app.get('/ajax', (req, res) => {
  console.log(store)//印出資料
  store.push(req.query)
  fs.writeFile("mem.json", JSON.stringify(store), function(err) {
      if(err) throw (err)
      console.log("The file was saved!")
  })
  res.send(req.query.id )
})
