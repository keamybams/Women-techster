function calcFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

let result = calcFactorial(4);
console.log(result);

