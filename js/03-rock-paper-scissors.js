/* eslint-env browser */

function game() {
    "use strict";
    var pc, user, msg;

    pc = Math.floor(Math.random() * 3);
    user = window.prompt("Rock, paper or scissors?");


    if (pc === 0) {
        pc = "rock";
    } else if (pc === 1) {
        pc = "paper";
    } else if (pc === 2) {
        pc = "scissors";
    }


    if (pc === user) {
        msg = "Computer chose the same. Tie game! Try again.";
    } else if (pc === "rock" && user === "scissors") {
        msg = "Computer chose rock. Rock destroys scissors. Loser!";
    } else if (pc === "scissors" && user === "paper") {
        msg = "Computer chose scissors. Scissors cut paper. Loser!";
    } else if (pc === "paper" && user === "rock") {
        msg = "Computer chose paper. Paper covers rock. Loser!";
    } else if (pc === "scissors" && user === "rock") {
        msg = "Computer chose scissors. Rock destroys scissors. You win!";
    } else if (pc === "paper" && user === "scissors") {
        msg = "Computer chose paper. Scissors cut paper. You win!";
    } else if (pc === "rock" && user === "paper") {
        msg = "Computer chose rock. Paper covers rock. You win!";
    } else {
        msg = "What are you doing? That is not a valid choice.";
    }
    
    return msg;
}

window.alert(game());


