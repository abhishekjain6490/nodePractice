var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/abhishek";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var mysort = { carName: -1 };  // carName in Decending order ..
db.collection("carPriceDetail").find().sort(mysort).toArray(function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});  