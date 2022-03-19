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
    let playerChoise = this.getAttribute("data-choice");
    playerGame = (playerChoise)


});

}

function playerGame (playerChoise) {
    playerImage.src = `assets/images/${choices[playerChoise]}.png`;
    playerImage.alt = choices[playerChoise];
}  

let computerChoise = Math.floor(Math.random() * 3);

function computerGame (computerChoise) {

computerImage.src = `assets/images/${choices[computerChoise]}.png`;
playerImage.alt = choices[computerChoise];

} 

function checkWinner() {

let result = checkWinner(choices[computerChoise], choices[playerChoise]);

} 


