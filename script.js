function getComputerChoiche (){
    let myOptions = ["Rock", "Paper", "Scissors"];

    let myRoundChoice = myOptions[Math.floor(Math.random()*myOptions.length)];

    return myRoundChoice;
}

function getPlayerChoice (){
    let playerAnswer = prompt("Choose between Rock, Paper or Scissors:");

    return playerAnswer; 
}

function singleRound (computerSelection, playerSelection){
    if ((computerSelection.localeCompare(playerSelection, "en",{sensitivity: "accent"})) === 0) {
        console.log("It's a tie! Re-playing the round...");
        return singleRound(getComputerChoiche(), getPlayerChoice());
    }
    else if (((computerSelection.localeCompare("Rock","en",{sensitivity:"accent"}) === 0) && (playerSelection.localeCompare("Scissors","en",{sensitivity:"accent"}) === 0))){
        return console.log("You Lose! Rock beats Scissors");
    }
    else if (((computerSelection.localeCompare("Paper","en",{sensitivity:"accent"}) === 0) && (playerSelection.localeCompare("Rock","en",{sensitivity:"accent"}) === 0))){
        return console.log("You Lose! Paper beats Rock");
    }
    else if (((computerSelection.localeCompare("Scissors","en",{sensitivity:"accent"}) === 0) && (playerSelection.localeCompare("Paper","en",{sensitivity:"accent"}) === 0))){
        return console.log("You Lose! Scissors beats Paper");
    }
    else {
        return console.log("You Won !! Congratulations :D");
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoiche();

console.log(`Your choice: ${playerSelection}`);
console.log(`Computer choice: ${computerSelection}`);
console.log(singleRound(computerSelection, playerSelection));