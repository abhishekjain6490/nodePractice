var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/abhishek";  
MongoClient.connect(url, function(err, db) {  
  if (err) throw err;  

  db.collection("carPriceDetail").find({}).toArray(function(err, result) {  
  	if (err) throw err;  
    console.log(result);  
    db.close();  
  });  
});  