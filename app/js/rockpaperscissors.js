////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var getMove;

    while(move === null) {
    	getInput();
    }
    if(move !== ' ') {
    	getMove = move;
    }
    return getMove;
}

function getComputerMove(move)) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var compMove;

    if(move !== ' ') {
    	compMove = move;
    } else {
    	randomPlay();
    }
    return compMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    var x = 'rock'
    var y = 'paper'
    var z = 'scissors'

    console.log('player move = ' + playerMove + '; computer move = ' + computerMove);

    if(playerMove == z && computerMove == y) || (playerMove == x && computerMove == z) || (playerMove == y && computerMove == x) {
    	winner = 'player';
    	} else if((computerMove == z && playerMove ==y) || (computerMove == x && playerMove == z) || (computerMove == y && playerMove == x)) {
    		winner = 'computer';
    	} else if(playerMove == computerMove) {
    		winner = 'tie';
    	}
    	return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

