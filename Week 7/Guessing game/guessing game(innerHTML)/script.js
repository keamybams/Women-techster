function guessRandom() {
    let num = parseInt(document.getElementById("input").value);
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let result = document.getElementById("result");

    console.log(randomNumber);

    if (num < 1 || num > 100 || isNaN(num)) {
        result.innerHTML = 'Please enter a valid number';
    } else if (num > randomNumber) {
        result.innerHTML = 'Too High';
    } else if (num < randomNumber) {
        result.innerHTML = 'Too Low';
    } else {
        result.innerHTML = 'Correct';
    }
}

