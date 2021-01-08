function printNumbers(){
    for(let i = 0; i < 10; i++){
        document.write('<li>' + i + '</li>')
    }
}

let correctAnswer = 34;

function guess(){
    let userAnswer = prompt('Please select a number 1 - 100');
    // Error checking later
    while (userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Incorrect. Please select a number 1 - 100');
    }
    let numberOfGuesses = 8
    for(let i = 0; i < numberOfGuesses; i++)}

    }

}