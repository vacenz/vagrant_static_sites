'use strict';

var express = require('express');
var app = express();
var port = 4530;
var ip = '192.168.56.95';

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.send('Hello World\n');
});

app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port);
});