// Rock Paper Scissors
// 3 choices with different strengths and weaknesses
// rock > scissors
// paper > rock
// scissors > paper
// game against computer

let rock = (0)
let paper = (1)
let scissors = (3)
let randomNum = Math.floor(Math.random() * 3)

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

let playerSelection = (1);

console.log("Must input 0, 1 or 2");
console.log(playerSelection);

let computerSelection = randomNum;

function playRound() {
    if (playerSelection === computerSelection)
    console.log("Draw, play again");
    else if (playerSelection === 0 && computerSelection === 1)
    console.log("You Lose");
    else if (playerSelection === 0 && computerSelection === 2)
    console.log("You Win");
    else if (playerSelection === 1 && computerSelection === 0)
    console.log("You Win");
    else if (playerSelection === 1 && computerSelection === 2)
    console.log("You Lose");
    else if (playerSelection === 2 && computerSelection === 0)
    console.log("You Lose");
    else if (playerSelection === 2 && computerSelection === 1)
    console.log("You Win");
    else;
    console.log();
}

playRound(playerSelection, computerSelection);