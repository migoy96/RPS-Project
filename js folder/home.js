const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let scoreLimit = 5; // Default score limit


function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Both choose " + playerSelection + "," + "It's a tie!";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function setScoreLimit() {
  scoreLimit;
}

function updateMatchHistory(result) {
  const matchHistoryList = document.getElementById("match-history");
  const listItem = document.createElement("li");
  listItem.innerHTML = result;
  listItem.style.marginBottom = "15px";
  listItem.style.listStyle = "none";
  matchHistoryList.insertBefore(listItem,matchHistoryList.firstElementChild);
}


function updateScoreDisplay() {
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function checkGameResult() {
  if (playerScore >= scoreLimit) {
    alert("Congratulations! You win the game!");
    resetGame();
  } else if (computerScore >= scoreLimit) {
    alert("Sorry, you lose the game.");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  clearMatchHistory();
}

function clearMatchHistory() {
  const matchHistoryList = document.getElementById("match-history");
  matchHistoryList.innerHTML = '';
}


//arsenal trigger button (per button)
const buttonRock = document.getElementById("rock");
  buttonRock.addEventListener("click", function () {
    setScoreLimit();
    const playerSelection = choices[0];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateMatchHistory(result);
    updateScoreDisplay();
    checkGameResult();
});

const buttonPaper = document.getElementById("paper");
  buttonPaper.addEventListener("click", function () {
    setScoreLimit();
    const playerSelection = choices[1];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateMatchHistory(result);
    updateScoreDisplay();
    checkGameResult();
});

const buttonScissors = document.getElementById("scissors");
  buttonScissors.addEventListener("click", function () {
    setScoreLimit();
    const playerSelection = choices[2];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateMatchHistory(result);
    updateScoreDisplay();
    checkGameResult();
});


//modal functions

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}