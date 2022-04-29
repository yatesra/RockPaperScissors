const computerChoiceDisplay = document.getElementById('computer-choice-display')
const userChoiceDisplay = document.getElementById('user-choice-display')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoiceDisplay


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoiceDisplay = e.target.id
    userChoiceDisplay.innerHTML = userChoiceDisplay
}))