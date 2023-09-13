const helpers = require("./Helpers.js");
const prompt = require('prompt-sync')();

let input

do {
    input = prompt("Enter your age (min 0 and max 125) : ");
}while(!helpers.isValidNumericInput(input,0,125));

console.log("You are " + calcAgeToCatYears(Number(input)) + " years old in cat age");



function calcAgeToCatYears(input) {

    let earlyYears ;
    let otherYears = 0;

    if(input <=2){

        earlyYears=input*25;
    }
    
    else{
        earlyYears=2*25;
        otherYears=(input-2)*4;
    }

    return earlyYears+otherYears;
}
