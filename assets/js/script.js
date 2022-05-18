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
    let playerChoise = this.getAttribute("data-choise");
    playerGame = (playerChoise)


});

}

/** function for playerGame */

function playerGame (playerChoise) {
    playerImage.src = `assets/images/${choices[playerChoise]}.png`;
    playerImage.alt = choices[playerChoise];
}  

let computerChoise = Math.floor(Math.random() * 3);

function computerGame (computerChoise) {

computerImage.src = `assets/images/${choices[computerChoise]}.png`;
playerImage.alt = choices[computerChoise];

let result = checkWinner(choices[computerChoise], choices[playerChoise]);

} 

function checkWinner(computerChoise, playerChoise) {
    if (computerChoise === playerChoise) {
        getElementById('winner').innerText = 'Its a tie!';
    } else if (computerChoise === 'rock' && playerChoise === 'paper') {
        getElementById('winner').innerText='You Win!';
    } else if (computerChoise === 'rock' && playerChoise === 'scissors') {
        getElementById('winner').innerText='You Win!';
        incrementPlayerScore();
    } else if(computerChoise === 'rock' && playerChoise === 'scissors') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else if (computerChoise === 'paper' && playerChoise === 'rock') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else if (computerChoise === 'scissors' && playerChoise === 'paper') {
        getElementById('winner').innerText='Computer Wins!';
        incrementComputerScore();
    } else { (computerChoise === 'scissors' && playerChoise === 'rock') ;
    getElementById('winner').innerText='You Win!';
    incrementPlayerScore();
    }
}
    