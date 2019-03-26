var http = require("http");
var dt = require('./dateModule');

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Date & Hello World"
   response.write("The Current Date is :- " + dt.myDateTime());
   response.end('Hello World\n This is Abhishek Jain');
   
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
console.log('Hello This is Abhishek ..')


