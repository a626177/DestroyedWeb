var express = require('express') //express加進來
var mysql = require('mysql');
var app = express()

var connection = mysql.createConnection({
  host  : 'localhost',
  user  : 'wp2016_groupA',
  password  : 'binbinbin',
  databaes:'wp2016_groupA'


});

connection.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
             
  console.log('connected as id ' + connection.threadId);
});



var app = express()//使用他
app.listen(7123)
app.use(express.static(__dirname + '/public'))
var store = []
var fs = require('fs')

app.get('/', function(req, res){//一條斜線的門
  res.sendfile('public/index.html')

  /*connection.query("SELECT * FROM accounts",function(error, rows,fields))
    if(!!erroe){
      console.log('Error in the query');
    }else{
      conslole.log('Successful');
    }*/
});

app.get('/ajax', (req, res) => {
  console.log(store)//印出資料
  store.push(req.query)
  fs.writeFile("mem.json", JSON.stringify(store), function(err) {
      if(err) throw (err)
      console.log("The file was saved!")
  })
  res.send(req.query.id )
})
