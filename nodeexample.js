//console.log('Hello JavaTpoint');
//console.error(new Error('Hell! This is a wrong method.'));
//const name = 'John';
//console.warn(`Don't mess with me ${name}! Don't mess with me!`);

// var http = require("http");
// http.createServer(function(request, response) {

//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World\n');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// setTimeout(function() {
//     console.log('3 seconds have passed')
// }, 3000);

//Global Objects ....
// var time = 0;
// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + 'seconds have passed');
//     if (time > 9) {
//         //console.log('10 seconds have passed successfully');
//         clearInterval(timer);
//     }
// }, 1000);

// console.log(__dirname)
// console.log(__filename)

//normal function statement 
// function hii() {
//     console.log('hii , abhi');
// }
// hii();

//Function Expression
// var bye = function() {
//     console.log('bye, abhi')
// };
// bye();

//module & require
// var counter = require('./nodemoduleexample');
// console.log(counter(['abhi', 'yash', 'murali']));

// var adder = require('./nodemoduleexample');
// console.log(adder(2, 8));

// var nodemoduleexample = require('./nodemoduleexample');
// console.log(nodemoduleexample.counter(['abhi', 'yash', 'murali']));
// console.log(nodemoduleexample.adder(5, 6));

//Reading & Writting files ..
//READING FILES..
// var fs = require('fs');

// fs.readFile('readnodefile.txt', 'utf8', function(err, data) {
//     if (err)
//         console.log('error is coming ');
//     else
//         console.log(data);

// });

//WRITTING FILES ..
//fs.writeFileSync('writenodefile.txt', readMe);

// var http = require('http');
// var server = http.createServer(function(req, res) {
//     console.log('request was made:' + req.url);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     var myObj = {
//         name: 'Abhi',
//         job: 'Developer',
//         age: 21
//     };
//     //res.end('Hello Abhi');
//     res.end(JSON.stringify(myObj));
//     res.status(404).end();
// });
// server.listen(3000);
// console.log('Server running at http://127.0.0.1:8000/')


//Routing --
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     console.log('request was made:' + req.url);
//     if (req.url === '/home' || req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/index.html').pipe(res);

//     } else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if (req.url === '/api/abhi') {
//         var data = [{ Name: 'Abhishek', age: '21' }, { Name: 'Yash', age: '21' }];
//         res.writeHead(200, { 'content-type': 'application/json' });
//         res.end(JSON.stringify(data));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// });
// server.listen(3000);
// console.log('Server running at http://127.0.0.1:8');

//ExpressJs Example --

// var express = require('express');

// var app = express();

// app.get('/', function(req, res) {
//     res.send('Hello , this is the 1st Page of ExpressJs');
// });

// app.get('/contact', function(req, res) {
//     res.send('Hello , this is the contact page using ExpressJs');
// });

// app.get('/profile/:name', function(req, res) {
//     res.send('you are requested to see a profile of : ' + req.params.name);
// });

// app.listen(3000);
// console.log('express Get method is working fine');

// var fs = require("fs");
// var data = fs.readFileSync('readnodefile.txt');
// console.log(data.toString());
// console.log("Program Ended");


//this is non - blocking and asychoronous 1 st print hua then 2nd will take time so 3rd will print 1 st
console.log('hi');
setTimeout(function cb() {
    console.log('this msg will take time');
}, 5000);
console.log('print at 2nd time');


//print 1 by 1 coz use callback functionality ..

// console.log('start');

// function hii(cb) {
//     setTimeout(function() {
//         last()
//         return cb(`abhi`);
//     }, 5000)
// }

// hii(function(result) { console.log(`Done, ${result}`); })

// function last() {
//     setTimeout(function() {
//         console.log('print at last time');
//     }, 5000)
// }