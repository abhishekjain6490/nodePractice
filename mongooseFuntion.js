var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/testmongoosecon', function(err) {

    if (err) throw err;

    console.log('Successfully connected');

});

var CarSchema = new Schema({
    Brand: { type: String },
    CarName: { type: String },
    Price: { type: Number }
});

var CarModel = mongoose.model("cd", CarSchema);

var First = new CarModel({ Brand: "Maruti", CarName: "Baleno", Price: "20000000" });
var Second = new CarModel({ Brand: "Honda", CarName: "Amaze", Price: "30000000" });
var Third = new CarModel({ Brand: "Honda", CarName: "Amaze", Price: "99" });

Third.save(function(err) {
    if (err)
        console.log("Error"); //abhishek iofjd
    else
        console.log("FirstDone");
});

/*Second.save(function(err){
	if(err)
		console.log("Error");
	else
		console.log("SecondDone");
});*/


// Total data ke liye ...................
/*CarModel.find({},function(err,data){
	if(err)
		console.log("Error");
	else
		console.log(data);
});*/



//Id se data find karne ke liye .................

/*CarModel.findById("5c7f9f90080af33cced93b60", function (err, data) {
	console.log(data);
});*/


//Kisi bhi name se find karne ke liye (isme Brand se find kiya he) ..............

/*CarModel.find({"Brand":"Maruti"}, function (err, data) {
	console.log(data);
});*/


//find karna he Id se and Update karna he particualar Id ka data ............

/*CarModel.findByIdAndUpdate("5c7f9f90080af33cced93b60", { $set: { Brand: 'Hyundai' }}, 
function(err,data){
	if(err)
		console.log("Error");
	else
		console.log(data);
});*/


//Query se Find karke Update karna he ..........

//var query = { CarName: 'Baleno' };


// update one with query ............

/*CarModel.findOneAndUpdate(query, { CarName: 'RangeRover' }, 
	function(err,data){
	if(err)
		console.log("Error");
	else
		console.log(data);
});*/


// Update Many with query .......... use this also || var query = { CarName: 'Baleno' };

/*CarModel.updateMany(query, { CarName: 'RangeRover' }, 
	function(err,data){
	if(err)
		console.log("Error");
	else
		console.log(data);
});*/

//find Max & Min Value of database .......

//var findQuery = CarModel.find({Brand : "Maruti"}).sort({Price : -1}).limit(1); // Brand-Maruti me se max find karke dega....
var findQuery = CarModel.find({}).sort({ Price: -1 }).limit(1); // total me se find karke max value dega ....

findQuery.exec(function(err, maxResult) {
    if (err) { return err; }

    console.log("min salary found", maxResult)

});