// Rock Paper Scissors
// 3 choices with different strengths and weaknesses
// game against computer
// computer picks using random number from 0-2
// player enters choice which is stored as a variable
// function runs game using computer and player choices
// play round using player input and computer random number
let playerScore = 0;
let computerScore = 0;
function playRound() {
    // have player input choice 
let selection = prompt("Rock, Paper or Scissors?" , "Rock") 
let playerSelection = selection.toLowerCase();
console.log(playerSelection);
// convert name to number
let rock = (0);
let paper = (1);
let scissors = (2);

if (playerSelection === "rock") {
playerSelection = rock;
}
else if (playerSelection === "paper") {
playerSelection = paper;
}
else if (playerSelection === "scissors") {
playerSelection = scissors;
}
// computer selection
let computerSelection = Math.floor(Math.random() * 3)
console.log(computerSelection);

//function computerPlay() {
if (computerSelection === 0) {
    console.log("Rock");
}
else if (computerSelection === 1) {
    console.log("Paper");
}
else if (computerSelection === 2) {
    console.log("Scissors");
}
else
console.log("");

//}

    if (playerSelection === computerSelection) {
    console.log("Draw, play again");
    }
    else if (playerSelection === 0 && computerSelection === 1) {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
    }
    else if (playerSelection === 0 && computerSelection === 2) {
    console.log("You Win! Rock beats Scissors")
    playerScore++;
    }
    else if (playerSelection === 1 && computerSelection === 0) {
    console.log("You Win! Paper beats Rock");
    playerScore++;
    }
    else if (playerSelection === 1 && computerSelection === 2) {
    console.log("You Lose! Scissors beats Paper");
    computerScore++;
    }
    else if (playerSelection === 2 && computerSelection === 0) {
    console.log("You Lose! Rock beats Scissors");
    computerScore++;
    }
    else if (playerSelection === 2 && computerSelection === 1) {
    console.log("You Win! Scissors beats Paper");
    playerScore++;
    }
    else;
    console.log();

    console.log(playerScore);
    if ((playerScore === 3) && (playerScore > computerScore)) {
    console.log("You Win The Game!");
    }
    if ((computerScore === 3) && (computerScore > playerScore)) {
    console.log("You Lose The Game!");
    }
}

// 5 round game 
function game() {
for (let i = 0; i < 5; i++) {
    playRound()
    
 }
}

game();