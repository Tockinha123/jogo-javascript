function getComputerChoiche (){
    let myOptions = ["Rock", "Paper", "Scissors"];

    let myRoundChoice = myOptions[Math.floor(Math.random()*myOptions.length)];

    return myRoundChoice;
}

