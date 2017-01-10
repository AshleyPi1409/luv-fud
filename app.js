var express = require('express');
var app = express();

app.use(express.static('Index'));

app.listen(8081, function () {
  console.log('port: 8081');
});


app.get('/',function (req, res) {
  res.sendFile(__dirname + '/Index/index.html');
});
