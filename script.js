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