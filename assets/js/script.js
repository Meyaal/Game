const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];



/** 
 * add eventlistner to all the buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function(){
    let playerChoice = this.getAttribute('data-choice');
    play(playerChoice);
});
console.log('data-choice');
}


/** function for playerGame */

function playerGame (playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoise]}.png`;
    playerImage.alt = choices[playerChoise];
}  

let computerChoise = Math.floor(Math.random() * 3);

function computerGame (computerChoice) {

computerImage.src = `assets/images/${choices[computerChoice]}.png`;
playerImage.alt = choices[computerChoice];

let result = checkWinner(choices[computerChoice], choices[playerChoice]);

} 

function checkWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        getElementById('winner').innerText = 'Its a tie!';
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        getElementById('winner').innerText='You Win!';
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        getElementById('winner').innerText='You Win!';
        incrementPlayerScore();
    } else if(computerChoice === 'rock' && playerChoice === 'scissors') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else if (computerChoice === 'paper' && playerChoice === 'rock') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else { (computerChoice === 'scissors' && playerChoice === 'rock') ;
    getElementById('winner').innerText='You Win!';
    incrementPlayerScore();
    }
}
    