// Rock Paper Scissors
// 3 choices with different strengths and weaknesses
// game against computer
// computer picks using random number from 0-2
// player enters choice which is stored as a variable
// function runs game using computer and player choices
// play round using player input and computer random number
let playerScore = 0;
let computerScore = 0;
const rock = (0);
const paper = (1);
const scissors = (2);
// computer selection
let computerSelection = Math.floor(Math.random() * 3)
const container = document.querySelector('#container');
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  playRound(rock, computerSelection);
  const rockResults = document.createElement('div');
  rockResults.classList.add('rockResults');
  rockResults.textContent = 'Player: Rock';

    container.appendChild(rockResults);
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playRound(paper, computerSelection);
    const paperResults = document.createElement('div');
    paperResults.classList.add('paperResults');
    paperResults.textContent = 'Player: Paper';

    container.appendChild(paperResults);
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playRound(scissors, computerSelection);
    const scissorsResults = document.createElement('div');
    scissorsResults.classList.add('scissorsResults');
    scissorsResults.textContent = 'Player: Scissors';

    container.appendChild(scissorsResults);
});
function playRound(playerSelection, computerSelection) {
    // have player input choice 
    // let selection = prompt("Rock, Paper or Scissors?" , "Rock") 
    // let playerSelection = selection.toLowerCase();
    if (playerSelection === "rock") {
    playerSelection = rock;
    }
    else if (playerSelection === "paper") {
    playerSelection = paper;
    }
    else if (playerSelection === "scissors") {
    playerSelection = scissors;
    }
    const container = document.querySelector('#container');
//function computerPlay() {
    if (computerSelection === 0) {
    const computerRock = document.createElement('div');
    computerRock.classList.add('computerRock');
    computerRock.textContent = 'Computer: Rock';

    container.appendChild(computerRock);
    }
    else if (computerSelection === 1) {
        const computerPaper = document.createElement('div');
        computerPaper.classList.add('computerPaper');
        computerPaper.textContent = 'Computer: Paper';
    
        container.appendChild(computerPaper);
    }
    else if (computerSelection === 2) {
        const computerScissors = document.createElement('div');
        computerScissors.classList.add('computerPaper');
        computerScissors.textContent = 'Computer: Scissors';
        container.appendChild(computerScissors);
    }
    else
    console.log("");
//}
    if (playerSelection === computerSelection) {
    const draw = document.createElement('div');
    draw.classList.add('draw');
    draw.textContent = `Draw, play again!\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(draw);
    }
    else if (playerSelection === 0 && computerSelection === 1) {
    computerScore++;
    const rockLose = document.createElement('div');
    rockLose.classList.add('rockLose');
    rockLose.textContent = `You Lose! Paper beats Rock.\nComputer: ${computerScore} Player: ${playerScore}`
    container.appendChild(rockLose);
    }
    else if (playerSelection === 0 && computerSelection === 2) {
    playerScore++;
    const rockWin = document.createElement('div');
    rockWin.classList.add('rockWin');
    rockWin.textContent = `You Win! Rock beats Scissors.\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(rockWin);
    }
    else if (playerSelection === 1 && computerSelection === 0) {
    playerScore++;
    const paperWin = document.createElement('div');
    paperWin.classList.add('paperWin');
    paperWin.textContent = `You Win! Paper beats Rock.\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(paperWin);
    }
    else if (playerSelection === 1 && computerSelection === 2) {
    computerScore++;
    const paperLose = document.createElement('div');
    paperLose.classList.add('paperLose');
    paperLose.textContent = `You Lose! Scissors beats Paper.\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(paperLose);
    }
    else if (playerSelection === 2 && computerSelection === 0) {
    computerScore++;
    const scissorsLose = document.createElement('div');
    scissorsLose.classList.add('scissorsLose');
    scissorsLose.textContent = `You Lose! Rock beats Scissors.\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(scissorsLose);
    }
    else if (playerSelection === 2 && computerSelection === 1) {
    playerScore++;
    const scissorsWin = document.createElement('div');
    scissorsWin.classList.add('scissorsWin');
    scissorsWin.textContent = `You Win! Scissors beats Paper.\nComputer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(scissorsWin);
    }
    else;
    console.log();

    if ((playerScore === 3) && (playerScore > computerScore)) {
    const youWin = document.createElement('h3');
    youWin.classList.add('youWin');
    youWin.textContent = `You Win The Game! Computer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(youWin);
    }
    if ((computerScore === 3) && (computerScore > playerScore)) {
    console.log("");
    const youLose = document.createElement('h3');
    youLose.classList.add('youLose');
    youLose.textContent = `You Lose The Game! Computer: ${computerScore} Player: ${playerScore}`;
    container.appendChild(youLose);
    }
}



// 5 round game 
// function game() {
// for (let i = 0; i < 5; i++) {
//    playRound()
    
// }
// }
// game();