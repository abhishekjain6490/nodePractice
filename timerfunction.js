// function f1() {
//     setInterval(function() {
//         console.log('hii i am setInterval')
//     }, 1000)
// }
// f1();


// function f1(cb) {

//     console.log('i m f1')
//     return cb('Task complete');
// }

// function f2(cb) {
//     console.log('i m f2')
//     f1(cb)
// }

// function f3(cb) {
//     setTimeout(function() {
//         console.log('i m f3')
//         f2(cb)
//     }, 4000)
// }

// function f4(cb) {
//     console.log('i m f4')
//     f3(cb)
// }

// console.log('functionality start')
// f4(function(result) { console.log(`Completed, ${result}`); })

var count = 0;
var intervalObject = setInterval(function() {

    count++;
    console.log(count, 'seconds passed');
    if (count == 5) {
        console.log('Finish')
        clearInterval(intervalObject);
    }
}, 1000)