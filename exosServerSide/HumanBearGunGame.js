const helpers = require("./Helpers.js");
const prompt = require('prompt-sync')();

startGame();

function startGame(){
    let validChoices = ["human", "bear", "gun"];

    let i = helpers.randMinMax(0, 2)
    let computerChoice = validChoices[i];
    let input;


    do {
        input = prompt("Enter Bear, human or gun to play : ");

        if (input === null) {
            break;
        }
    }
    while (!isValidInput(input, validChoices));

    if(!isTieGame(input,computerChoice)){

        if(hasUserWon(input,computerChoice))
            console.log("Computer choice was: " + computerChoice + "; Your choice was  : " + input + " ==> You've won!");
        
        else{
            console.log("Computer choice was: " + computerChoice + "; Your choice was  : " + input + " ==> You've lost!");
        }
    }

    else{
        console.log("Computer choice was: " + computerChoice + "; Your choice was  : " + input + " ==> Tie Game!");
    }
}


function isTieGame(input, computerChoice) {
   
    return input.toLowerCase() === computerChoice;
}

function isValidInput(input, validChoices) {

    return validChoices.includes(input.toLowerCase())
}

function hasUserWon(userChoice, computerChoice) 
{
    if (userChoice.toLowerCase() === "human") {
        return computerChoice !== "bear";
               
    }
    else if(userChoice.toLowerCase() === "bear"){
        return computerChoice!=="gun";
    }
    
    else{
        return computerChoice !=="human";
    }
}