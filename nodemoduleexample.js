//module.exports.counter = function(arr) { // we can export like this also ..
var counter = function(arr) {
    return 'There are' + arr.length + 'elements in this array..'

};

// var adder = function(a, b) {
//     return 'sum of a,b =' + a + b + 'this..'
// };

var adder = function(a, b) {
    return `the sum of two numbers is ${a+b}`;
}

// module.exports = counter;
// module.exports = adder;

// module.exports.counter = counter;
// module.exports.adder = adder;

module.exports = {
    counter: counter,
    adder: adder
};