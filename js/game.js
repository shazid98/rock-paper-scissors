function getComputerChoice() {
  var choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  } else if (choice <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("Choose rock, paper, or scissors.");
  return choice.toLowerCase();
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "The game is a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "The computer won! Paper beats rock.";
    } else {
      playerScore++;
      return "You won! Rock beats scissors.";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return "The computer won! Scissors beats paper.";
    } else {
      playerScore++;
      return "You won! Paper beats rock.";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "The computer won! Rock beats scissors.";
    } else {
      playerScore++;
      return "You won! Scissors beats paper.";
    }
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerSelectionDisplay.textContent = "You have chosen: " + playerSelection;
    computerSelectionDisplay.textContent = "The computer has chosen: " + computerSelection;
    if (playerSelection === computerSelection) {
      resultDisplay.textContent = "The game is a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      resultDisplay.textContent = "The computer won! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      resultDisplay.textContent = "You won! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      resultDisplay.textContent = "You won! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      resultDisplay.textContent = "The computer won! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      resultDisplay.textContent = "The computer won! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      resultDisplay.textContent = "You won! Scissors beats paper.";
    }
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " +computerScore;
    if (playerScore === 5) {
      alert("You won the game!");
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      alert("The computer won the game!");
      reset();
    }
  });
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);
function reset(){
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = "Player Score: " + playerScore;
  computerScoreDisplay.textContent = "Computer Score: " +computerScore;
}
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerSelectionDisplay = document.querySelector("#player-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const resultDisplay = document.querySelector("#result");