// Declare constants for DOM elements
const playerScoredisplay = document.getElementById("player-score");
const computerScoredisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById('result')
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const win = document.getElementById("player-win");


let playerScore = 0;
let computerScore = 0;
let result
let computerChoice
let playerChoice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random () * 3)

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

// function to decide who wins the game

function decideWinner(playerChoice, computerChoice) {
   if(playerChoice === "paper" && computerChoice === "paper") {
   result = "Its a tie!"
} else (playerChoice === "rock" && computerChoice === "paper") 
   result = "player win!"
  } if(playerChoice === "rock" && computerChoice === "scissors") {
   result = "you lost!"
}
console.log(decideWinner);

   function main () {
    rock_div.addEventListener ("click", () => decideWinner("rock"));

    paper_div.addEventListener("click", () => decideWinner("paper"));
    
    scissors_div.addEventListener("click", () => decideWinner("scissors"));

}
main();

