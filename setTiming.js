function printTable() {
    var temp = 0;
    for (var i = 1; i <= 20; i++) {
        temp = i * 2;
        if (temp % 5 !== 0) {
            console.log(temp);
        }
        if (temp % 5 == 0) {
            console.log("wait, your output is coming ..  ");
            wait_time(temp);
        }
    }
}
printTable();

function wait_time(time) {
    let tmp = time * 1000;
    setTimeout(function() {
        print(tmp);
    }, tmp);
}

function print(tmp) {
    let table = tmp / 1000;
    console.log("sorry for waiting " + tmp + " ms time, Your value is: " + table);
}