

const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}


function getResult(playerChoice, computerChoice) {
 
  let Score;

 
  if (playerChoice == computerChoice) {
    Score = 0
    
   
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    Score = 1
    
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    Score = 1
    
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    Score = 1
   
  } else {
    Score = -1
  }
  
  return Score
}


function showResult(Score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if (Score == -1 ) {
    resultDiv.innerText = 'You lose!'
  }else if (Score == 0) {
    resultDiv.innerText = "Its a tie!"
  }else {
    resultDiv.innerText = 'You won!'
  }

  handsDiv.innerText = `🧑 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}


function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice()
  const Score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += Score
  showResult(Score, playerChoice, computerChoice)
}



function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}


function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()