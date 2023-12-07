function guessRandom(num) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log(randomNumber);

    if (num < 1 || num > 100 || isNaN(num)) {
        return 'Please enter a valid number';
    } else if (num > randomNumber) {
        return 'Too High';
    } else if (num < randomNumber) {
        return 'Too Low';
    } else {
        return 'Correct';
    }
}

let result = guessRandom(10);
console.log(result);