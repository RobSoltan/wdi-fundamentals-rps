////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    if(playerMove == computerMove) {
        winner = "tie";
    }
    else if(playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    }
    else if(playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    }
    else if(playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    }
    else if(playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if(playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0; 
    var computerWins = 0;
    
        while (playerWins <= 5 && computerWins <= 5) {
            var playerTurnMove = getPlayerMove();
            var computerTurnMove = getComputerMove();
            var winnerRound = getWinner(playerTurnMove, computerTurnMove);      
            console.log("Player's move is " + playerTurnMove + " Computer's move is " + computerTurnMove);
            console.log("The winner this round is " + winnerRound);
            if (winnerRound == 'player') {
                playerWins += 1;
                console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
                if (playerWins == 5) {
                    console.log("Congratulations! You win!");
                    break;
                }
            }
            else if (winnerRound == 'computer') {
                computerWins += 1;
                console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
                if (computerWins == 5) {
                    console.log("Oh No! The computer won!");
                    break;
                }
            
            }
            else if (winnerRound == 'tie' ){
                console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
            }
        }
        

    console.log("The final score is: ");
    return "Player: " + playerWins + ", Computer: " + computerWins;
}

playToFive();