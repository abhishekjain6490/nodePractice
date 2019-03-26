var MongoClient = require('mongodb').MongoClient;  
    var url = "mongodb://localhost:27017/abhishek";  
    MongoClient.connect(url, function(err, db) {  
    if (err) throw err;  
    var myobj = [
    { name: "AbhishekJain", age: "21", address: "Firozabad" },
    { name: "YashTondon", age: "21", address: "Shahjahapur" },
    { name: "GauravPushola", age: "21", address: "Jaipur" },
    { name: "ShreyaBajpai", age: "22", address: "Lucknow" }
    ]; 
    db.collection("test").insert(myobj, function(err, res) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    db.close();  
    });  
    });