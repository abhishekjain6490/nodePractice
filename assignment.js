// use get,post,put, patch methods....

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/abhishek";
var app = express();

//get request (By Name)
var temp = app.get('/name', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error(err);
            return res.status(500).end('connection error');
        } else {
            let name_search = req.query.name;
            console.log(name_search);
            try {
                if (name_search == "yash") {
                    var error = new Error("Error Occurred");
                    throw error;
                    //return res.status(500).end('name error');                                     
                } else {
                    var name_search_obj = { name: name_search }
                    db.collection("assignmentdata").find(name_search_obj).toArray(function(err, result) {
                        if (err) throw err;
                        res.status(200);
                        res.send(result);
                        db.close();
                    });
                }
            } catch (err) {
                console.log("UserDefined Error");
                res.status(500).end("Internal Server error occurred");
            }
        }
    });
});

var temp = app.get('/all', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error(err);
            return res.status(500).end('connection error');
        } else {
            db.collection("assignmentdata").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.status(200);
                res.send(result);
                db.close();
            });



        }
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

//post request (To insert record in database)
app.post('/insert', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error(err);
            return res.status(500).end('connection error');
        } else {
            var name1 = req.body.name;
            var age1 = req.body.age;
            var address1 = req.body.address;
            var myobj = [{
                name: name1,
                age: age1,
                address: address1
            }];
            db.collection("assignmentdata").insert(myobj, function(err) {
                if (err) {
                    console.error("Error occurred in update command");
                    return res.status(500).end('Error occurred in insert command');
                } else {
                    console.log("1 record inserted");
                    db.close();
                    res.status(200);
                    res.send("Record Inserted Successfully");
                }
            });
        }
    });
});

//Patch request (By Body) {age getting modified using name field}
app.patch('/patch', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error(err);
            return res.status(500).end('Connection error');
        } else {
            var name1 = req.body.name;
            var age1 = req.body.age;
            //var address1 = req.body.address;
            var myobjname = { name: name1 };
            var myobj = {
                age: age1
            };
            db.collection("assignmentdata").update(myobjname, { $set: myobj }, function(err, result) {
                //db.collection("assignmentdata").update({name: "Tom Moody"},{$set:{age: 101}}, function(err, result) {
                if (err) {
                    console.error("Error occurred in update command");
                    return res.status(500).end('Error occurred in update command');
                } else {
                    if (result.result.nModified !== 0) {
                        console.log("1 record updated using patch");
                        db.close();
                        res.status(200);
                        res.send('Record Updated Using patch request');
                    } else {
                        console.log("Record has not been updated(patch)");
                        db.close();
                        res.status(200);
                        res.send('Record Does not exist Updated(Hence not updated)');
                    }
                }
            });
        }
    });
});

//Put request (By params)
app.put('/getData/:name/:lastName', function(req, res) {
    console.log(req.params);
    res.status(200).end('PUT(params) request successfull');
});

//Put request (By query)
app.put('/', function(req, res) {
    console.log(req.query);
    res.status(200).end('PUT(query) request successfull');
});

//Put request (By Body)
app.put('/yash', function(req, res) {
    console.log(req.body);
    MongoClient.connect(url, function(err, db) {
        if (err) {
            console.error("Connection Error");
            return res.status(500).end('Connection Error');
        } else {
            var name1 = req.body.name;
            var age1 = req.body.age;
            var address1 = req.body.address;
            var myobjname = { name: name1 };
            var myobj = {
                name: name1,
                age: age1,
                address: address1
            };


            db.collection("assignmentdata").update(myobjname, myobj, function(err, result) {
                if (err) {
                    console.error("Error occurred in update command");
                    return res.status(500).end('Error occurred in update command');
                } else {
                    if (result.result.nModified !== 0) {
                        console.log("1 record updated using put");
                        db.close();
                        res.status(200);
                        res.send('Record Updated Using put request');
                    } else {
                        console.log("Record has not been updated");
                        db.close();
                        res.status(200);
                        res.send('Record Does not exist(Hence Not updated)');
                    }
                }
            });
        }
    });
});

app.listen(3030);