//var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/abhishek";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
//var query = { color: "Blue" }; 
var query = { carName: /^L/ };  //particular letter se search karne ke liye   
db.collection("carPriceDetail").find(query).toArray(function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});  