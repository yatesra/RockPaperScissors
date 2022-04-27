const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition 
let CurrentTime = 60

function randomSquare() {
  squares.forEach(square =>  {
    square.classList.removal('mole')  
  })

  let randomSquare = squares[Math.floor(Math.random() * 9 )]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPositon){
    result++
    console.log(result)
    score.textContext = result
    hitPosition = null
    }
  })
})

function moveMole() {
  let timerId = null
  timerID = setInterval(randomSquare,1000)
}

moveMole()

function countDown(){
currentTime--
timeLeft.textContent = currentTime

if (currentTime == 0) {
  clearInterval(countDownTimerID)
  alert('GAME OVER! Your final score is' + result)
}

}
let countDownTimerID = setInterval(countDown, 1000)
