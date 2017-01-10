var express = require('express');
var app = express();

app.use(express.static('Index'));
app.set('port', process.env.PORT || 8081 );

app.listen(app.get('port'), function () {
  console.log('port: 8081');
});


app.get('*',function (req, res) {
  res.sendFile(__dirname + '/Index/index.html');
});
