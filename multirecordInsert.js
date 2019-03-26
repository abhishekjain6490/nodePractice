var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/abhishek";

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  

var myobj =[
{ carName: "Baleno", price: "1000000", color: "Blue", average: "22"},
{ carName: "RangeRover", price: "10000000", color: "Black", average: "12"},
{ carName: "Lamborghini", price: "9000000", color: "Blue", average: "15"},
{ carName: "Ferrari", price: "8000000", color: "Blue", average: "14"},
{ carName: "Audi", price: "3000000", color: "Red", average: "15"},
{ carName: "BMW", price: "3000000", color: "white", average: "13"},
{ carName: "wagnor", price: "2500000", color: "white", average: "22"}
];
db.collection("carPriceDetail").insert(myobj, function(err, res) {  
if (err) throw err;  
console.log("Number of records inserted: " + res.insertedCount);  
db.close();  
});  
});    