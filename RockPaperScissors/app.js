const computerChoiceDisplay = document.getElementById('computer-choice-display')
const userChoiceDisplay = document.getElementById('user-choice-display')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoiceDisplay


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoiceDisplay = e.target.id
    userChoiceDisplay.innerHTML = userChoiceDisplay
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // commenting just to practice commenting

if (randomNumber === 1) {
    computerChoice = 'rock'
}
if (randomNumber === 2) {
    computerChoice = 'scissors'
}
if (randomNumber === 3) { 
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    } 
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}
