// Get Methods -->> 

// when we wants our output in json format .......

// var express = require('express');
// var app = express();
// app.use(express.static('public'));

// app.get('/index.html', function(req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// })
// app.get('/process_get', function(req, res) {
//     response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })
// var server = app.listen(8000, function() {

//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)

// })


//Fetch data in paragraph format....

// var express = require('express');
// var app = express();

// app.get('/index.html', function(req, res) {
//     res.sendFile(__dirname + "/" + "index.html");
// })

// app.get('/get_example1', function(req, res) {
//     res.send('<p>Username: ' + req.query['first_name'] + '</p><p>Lastname: ' + req.query['last_name'] + '</p>');
//     console.log("Inserted Successfully")
// })

// var server = app.listen(8000, function() {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })


//Fetch data in paragraph format....

var express = require('express');
var app = express();

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/get_example1', function(req, res) {
    res.send('<p>Firstname: ' + req.query['firstname'] + '</p><p>Lastname: ' + req.query['lastname'] + '</p><p>Password: ' + req.query['password'] + '<p>AboutYou: ' + req.query['aboutyou'] + '</p></p>');
    console.log("Inserted Successfully")
})

var server = app.listen(8000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})