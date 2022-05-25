// Declare constants for DOM elements
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector("#result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

/**
 * Lists the choices
 * and generates the computer choice by using a random number from the array of choices
 */  
 function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomNumber =Math.floor(Math.random()*choices.length);
   return choices[randomNumber];
}

// Gets computer choice
(getComputerChoice());

/**
 * Finds the player score and increments it
 * inserts the result string into the result section
 */

function win(playerChoice, computerChoice) {
   playerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   document.getElementById(playerChoice).classList.add('winner');
}

/**
 * Finds the computer score and increments it
 * inserts the result string into the result section
*/

function lose(playerChoice, computerChoice) {
   computerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   document.getElementById(playerChoice).classList.add('loser');
}  

// Maintains the score and displays a string in the result
function tie(playerChoice, computerChoice) {
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   document.getElementById(playerChoice).classList.add('tie!');
}

// Compares the all of the possible combinations and gives back either win lose or tie
function game(playerChoice) {
   const computerChoice = getComputerChoice();
   switch(playerChoice + computerChoice) {
       case "rockscissors":
       case "paperrock":
       case "scissorspaper":
           win(playerChoice, computerChoice);
           break;
       case "rockpaper":
       case "paperscissors":
       case "scissorsrock":
           lose(playerChoice, computerChoice);
           break;
       case "paperpaper":
       case "scissorsscissors":
       case "rockrock":
           tie(playerChoice, computerChoice);
           break;
         }
      };
   
   game();

// Add event listeners to all icons
function main() {
   rock_div.addEventListener('click', () => game("rock"));

   paper_div.addEventListener('click', () => game("paper"));

   scissors_div.addEventListener('click', () => game("scissors"));
};

main();

