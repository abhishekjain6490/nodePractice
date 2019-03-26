// function printDetails(name, age, height) {
//     console.log(2 * 2);
// }

// printDetails();


// function multiply(a, b) {
//     console.log(a * b);
// }

// function square(n) {
//     //console.log(n * n);
//     return (n * n);

// }

// function printsquare(n) {
//     var squared = square(n);
//     console.log(squared);

// }

// printsquare(5);
// multiply(2, 3);

// var temp = square(3);
// console.log(temp)


// let x = 10;
// let y = 20;
// var z = 30;
// console.log(x + y + z);

// console.log(x + z);

//this is non - blocking and asychoronous 1 st print hua then 2nd will take time so 3rd will print 1 st

// console.log('hi');
// setTimeout(function cb() {
//     console.log('this msg will take time');
// }, 5000);
// console.log('print at 2nd time');


//print 1 by 1 coz use callback functionality ..


// console.log('start');

// function hii(cb) {
//     setTimeout(function() {
//         console.log('hii functionality start')
//         last(cb)
//         console.log('let see what will happen')
//     }, 2000)
// }

// function last(cb) {
//     setTimeout(function() {
//         console.log('print at last time');
//         return cb(`abhi`);
//     }, 2000)
// }

// hii(function(result) { console.log(`Done, ${result}`); })



function f1(cb) {

    console.log('i m f1')
    return cb('Task complete');
}

function f2(cb) {
    setTimeout(function() {
        console.log('i m f2')
        f1(cb)
    }, 1000);
}

function f3(cb) {
    console.log('i m f3')
    f2(cb)
}

function f4(cb) {
    console.log('i m f4')
    f3(cb)
}

console.log('functionality start')
f4(function(result) { console.log(`Completed, ${result}`); })