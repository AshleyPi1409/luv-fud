var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/',function ( req , res ) {
  res.sendFile(__dirname + '/index.html');
})

var server = app.listen(8081,function (){
  console.log(server.address().port);
})
