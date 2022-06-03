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

// Gets computer choice
(getComputerChoice());

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
         
      }
      game();

// Add event listeners to all icons
function main() {
   rock_div.addEventListener('click', () => game("rock"));

   paper_div.addEventListener('click', () => game("paper"));

   scissors_div.addEventListener('click', () => game("scissors"));
};

main();

// limit the game and end when either the user or computer gets to 5 points
function gameEnd() {
   if (playerScore === 5){
       playerWin();
       playerScore = 0;
       computerScore = 0; 
   }
   if (computerScore === 5){
       computerWin();
       playerScore = 0;
       computerScore = 0;
       
   }
}

// Styles the pop up message if the computer wins 
function computerWin() {
   document.getElementById('gameOver').style.display="block";
   document.getElementById('player-win').style.display ="none";
   document.getElementById('player-lose').style.display ="block";
}
// Styles the pop up message when the player wins
function playerWin(){
   document.getElementById('gameOver').style.display ="block";
   document.getElementById('player-lose').style.display ="none";
   document.getElementById('player-win').style.display ="block";
}
// Rmoves the pop up messages and resets the score 
function restart() {
   document.getElementById('gameOver').style.display="none";
   document.getElementById('player-win').style.display ="none";
   document.getElementById('player-lose').style.display ="none";
   resetScore();
}
// When user clicks on reset button scores will reset
function reset() {
   playerScore = 0;
   computerScore = 0;
   document.getElementById("computer-score").innerHTML = computerScore;
   document.getElementById("player-score").innerHTML = playerScore;
}

// Get the modal
const modal = document.getElementById("myModal");

// Gets the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }