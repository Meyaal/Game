// Declare constants for DOM elements
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector("#result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const resetButton = document.getElementById("reset-button");
let playerScore = 0;
let computerScore = 0;

/*Generate computer choice by random */
 
function getComputerChoice() {
   const choices = ['rock', 'paper', 'scissors'];
   const randomNumber =Math.floor(Math.random()*choices.length);
   return choices[randomNumber];
}

function convertToWord(word) {
   if (word === "rock") return "Rock";
   if (word === "paper") return "Paper";
   return "Scissors";
}
/* outcome function for player win
* increment score
*/
function win(playerChoice, computerChoice) {
   playerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   result_div.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}, You Win! "😁"`;
   document.getElementById(playerChoice).classList.add('win');
   setTimeout(function (){document.getElementById(playerChoice).classList.remove('win');} , 400);
} 
/**
  * outcome function for player lose and computer win
  * increment score 
  **/

function lose(playerChoice, computerChoice) {
   computerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   result_div.innerHTML = `${convertToWord(playerChoice)} lose to ${convertToWord(computerChoice)}, You lost! "😩"`;
   document.getElementById(playerChoice).classList.add('lose');
   setTimeout(function (){document.getElementById(playerChoice).classList.remove('lose');} , 400);
}  


 //  outcome function for a tie!
 
function tie(playerChoice, computerChoice) {
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   result_div.innerHTML = `${convertToWord(playerChoice)} equals ${convertToWord(computerChoice)}, Tie! "🙈"`;
   document.getElementById(playerChoice).classList.add('tie');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('tie'); }, 400);
}

// Compares all of the possible combinations and returns back either win lose or tie
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
         checkWinner();
      }
         
   
// Add event listeners to all icons
function main() {
   rock_div.addEventListener('click', () => game("rock"));

   paper_div.addEventListener('click', () => game("paper"));

   scissors_div.addEventListener('click', () => game("scissors"));
}

main();

function checkWinner() {
   if (playerScore === 5){
       playerScore = 0;
       computerScore = 0; 
       alert('You have won the game!');
   }
   if (computerScore === 5){
       playerScore = 0;
       computerScore = 0;
       alert('You have lost the game! Computer Won!');
       
   }
}

// When user clicks on reset button scores will reset
function reset() {
   playerScore = 0;
   computerScore = 0;
   document.getElementById("computer-score").innerHTML = computerScore;
   document.getElementById("player-score").innerHTML = playerScore;

}