// Declare constants for DOM elements
const playerScoredisplay = document.getElementById("player-score");
const computerScoredisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById('result')
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choice = document.getElementsByClassName("choice");

let playerScore = 0;
let computerScore = 0;
let result
let computerChoice
let playerChoice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random () * 3) + 1

    switch (randomNumber) {
   case 0:
      computerChoice = 'paper';
      break;
   case 1:
      computerChoice = 'scissors';
      break;
   case 2:
      computerChoice = 'rock';
} 
}

(generateComputerChoice());

function main () {
    rock_div.addEventListener ("click", () => choice("rock"));

    paper_div.addEventListener("click", () => choice('paper'));

    scissors_div.addEventListener("click", () => choice('scissors'));

}
main();

