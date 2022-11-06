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

function playGame() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playGame();
  }
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("The computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

game();
