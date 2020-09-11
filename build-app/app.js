var express = require('express');
app = express();

var msg = process.env.APP_MSG;

app.get('/', function (req, res) {
  res.send('Simple app for the Building Applications Lab!\n' + msg + '\n');
});

app.listen(8080, function () {
  console.log('Simple app for the Building Applications Lab!');
});

