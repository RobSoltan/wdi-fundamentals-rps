////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getInput() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    console.log("Choose rock, paper or scissors")
	return prompt();
}

function randomPlay() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var randomNumber = Math.random();
	if (randomNumber <0.33) {
		return "rock";
	} else if (randomNumber <0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove) {
		return ("tie!"); } 
	else if(playerMove === "rock"){
		if(computerMove === "scissors"){
		return ("player wins!");}  
		else {
		return ("computer wins!");
	}
	else if(playerMove === "paper"){
		if(computerMove === "rock"){
		return ("player wins!");}  
		else {
		return ("computer wins!");
	}
	else if(playerMove === "scissors"){
		if(computerMove === "paper"){
		return ("player wins!");}  
		else {
		return ("computer wins!");
		}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

