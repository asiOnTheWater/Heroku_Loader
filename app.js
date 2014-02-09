var express = require('express');
var app = express();
var PORT = Number(process.env.PORT || 9222);

app.get('/endpoint', function(req, res) {
  res.send("Hey", 200);
});

app.get('/loaderio-44003e740fcbcfdbf4d63612f8971ec8', function(req, res) {
  res.send("loaderio-44003e740fcbcfdbf4d63612f8971ec8", 200);
});

app.listen(PORT);
console.log('start');
