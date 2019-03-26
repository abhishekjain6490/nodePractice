var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/testmongoosecon', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

var Emp_Schema = new Schema({
	id: {type:Number},
	name: {type:String},
	address: {type:String}
});

var Emp_Model = mongoose.model("Emp",Emp_Schema);

var First = new Emp_Model({id: 100, name: "Ram", address: "jagatpura"});
var Second = new Emp_Model({id: 200, name: "Shyam", address: "ghantaghar"});


First.save(function(err){
	if(err)
		console.log("Error");
	else
		console.log("Done");
});

Emp_Model.find({},function(err,data){
	if(err)
		console.log("Error");
	else
		console.log(data);
});