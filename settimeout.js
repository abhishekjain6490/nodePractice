var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
}).listen(8080);

// setInterval(function() {
//     console.log("setInterval: Hey! 1 millisecond completed!..");
// }, 1000);

// var i = 0;
// console.log(i);
// setInterval(function() {
//     i++;
//     console.log(i);
// }, 1000);

// setTimeout(function() {
//     console.log("setTimeout: Hey! 1000 millisecond completed!..");
// }, 1000);

// var recursive = function() {
//     console.log("Hey! 1000 millisecond completed!..");
//     setTimeout(recursive, 1000);
// }

//recursive();

// function welcome() {
//     for (var a = 1; a <= 20; a++) {
//         console.log(2 * a);
//     }
// }
// var id1 = setTimeout(welcome, 1000);
// var id2 = setInterval(welcome, 1000);
// clearTimeout(id1);

function function1() {
    for (var a = 1; a <= 5; a++) {

        console.log(2 * a);

    }
}

function function2() {
    for (var a = 6; a <= 10; a++) {

        console.log(2 * a);

    }
}

function function3() {
    for (var a = 11; a <= 15; a++) {

        console.log(2 * a);

    }
}

function function4() {
    for (var a = 16; a <= 20; a++) {

        console.log(2 * a);

    }
}



// call the first chunk of code right away
function1();
console.log('till 10 complete')
setTimeout(function2, 5000);


setTimeout(function3, 10000);


//setTimeout(function4, 10000);