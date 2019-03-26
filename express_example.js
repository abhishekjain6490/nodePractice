var express = require('express');
var app = express();
app.get('/welcome', function(req, res) {
    res.send('Welcome to Expressjs Learning !');
});
var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});