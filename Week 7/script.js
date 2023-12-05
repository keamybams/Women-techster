function evenNum(param) {
    if (param % 2 === 0) {
        console.log("is an even number");
    } else {
        console.log("is not an even number");
    }
}

evenNum(7);

function printNumbers(n1, n2) {
    for (let i =n1; i <= n2; i++) {
        console.log(i);
    }
}

printNumbers(3, 13);

function calcFunc(n1, n2) {
    let sum = 0;

    for (let i = n1; i <= n2; i++) {
        sum += i;
    }

    return sum;
}

let result = calcFunc(5,8);
console.log(result);