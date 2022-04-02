// Rock Paper Scissors
// 3 choices with different strengths and weaknesses
// game against computer
// computer picks using random number from 0-2
// player enters choice which is stored as a variable
// function runs game using computer and player choices

const randomNum = Math.floor(Math.random() * 3)
console.log(randomNum);

function computerPlay() {
    if (randomNum === 0)
    console.log("Rock");
    else if (randomNum === 1)
    console.log("Paper");
    else if (randomNum === 2)
    console.log("Scissors");
    else
    console.log("");

}

computerPlay()

// have player input choice 
let selection = prompt("Rock, Paper or Scissors?" , "Rock") 
let playerSelection = selection.toLowerCase();

// convert name to number
let rock = (0);
let paper = (1);
let scissors = (2);
if (playerSelection === "rock")
playerSelection = rock;
else if (playerSelection === "paper")
playerSelection = paper;
else if (playerSelection === "scissors")
playerSelection = scissors;

console.log(playerSelection);

// play round using player input and computer random number
let computerSelection = randomNum;

function playRound() {
    if (playerSelection === computerSelection)
    console.log("Draw, play again");
    else if (playerSelection === 0 && computerSelection === 1)
    console.log("You Lose! Paper beats Rock");
    else if (playerSelection === 0 && computerSelection === 2)
    console.log("You Win! Rock beats Scissors");
    else if (playerSelection === 1 && computerSelection === 0)
    console.log("You Win! Paper beats Rock");
    else if (playerSelection === 1 && computerSelection === 2)
    console.log("You Lose! Scissors beats Paper");
    else if (playerSelection === 2 && computerSelection === 0)
    console.log("You Lose! Rock beats Scissors");
    else if (playerSelection === 2 && computerSelection === 1)
    console.log("You Win! Scissors beats Paper");
    else;
    console.log();
}

playRound(playerSelection, computerSelection);