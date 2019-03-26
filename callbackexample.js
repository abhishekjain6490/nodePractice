function f1(callback) {
    setTimeout(function() {
        console.log('f2 functionality complete now look f1 functionlity')
        return callback(`India is the best country`);
    }, 2000)
}

function f2(callback) {
    setTimeout(function() {

        for (let i = 0; i < 10; i++) {
            i % 2 == 0 ? console.log(i) : null;
        }
        f1(callback);
        console.log(`Ice Cream!`)
    }, 2000)
}


function f3(callback) {
    setTimeout(function() {
        console.log(`Australia has kangaroos`);
        f2(callback)
    }, 2000)
}


f3(function(result) { console.log(`Completed, ${result}`); })
    // f2(function(result) { console.log(`Great, ${result}`); })

console.log(`Functionality Started -- `);
// console.log(`Now wait for 5 sec to print f3 functionality`);
// //return callback me wapas f3 function ke pas wapas ..

//Promise functionality ..

// var keepmyword;
// keepmyword = true;

// promiseexample = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         if (keepmyword) {
//             resolve('I like to keep my words');

//         } else {
//             reject('sorry , i was unable to keep my promise');

//         }
//     }, 2000);
// });

// promiseexample.catch((err) => { console.log(err) }).then(print)

// function print() 
// {
//     console.log('Now the Result is Ready .. !!');
// }