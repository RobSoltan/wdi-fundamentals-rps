////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
    return move = getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    console.log('player move = ' + playerMove + '; computer move = ' + computerMove);
    
    if((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'paper' && computerMove == 'rock') || (playerMove == 'scissors' && computerMove == 'paper')) {
        winner = 'player';
    } else if((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'paper' && playerMove == 'rock') || (computerMove == 'scissors' && playerMove == 'paper')) {
        winner = 'computer';
    } else if(playerMove === computerMove) {
        winner = 'tie';
    }
    return winner;
}

function playRPS() {;
    playto(prompt('How many games claim WINNER?'));
}

function playto(numtimes) {
    console.log("Let's play Rock, Paper, Scissors! First to " + numtimes + " wins!" );
    var playerWins = 0;
    var computerWins = 0;
   
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    do {
         console.log('player wins = ' + playerWins + '; computer wins = ' + computerWins);
        
        var userInput = getInput();
        var playerMove = getPlayerMove(userInput);
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        
        if(winner === 'player') {
            playerWins++;
        } else if(winner === 'computer') {
            computerWins++;
        }
        
    } while(playerWins < numtimes && computerWins < numtimes);
    
    console.log("That's all folks!!!");
    
    if(playerWins > computerWins) {
        console.log('Player beats computer ' + playerWins + " to " + computerWins);
    } else {
        console.log('Computer beats player ' + computerWins + " to " + playerWins);
    }
    return [playerWins, computerWins];
}
playRPS();
