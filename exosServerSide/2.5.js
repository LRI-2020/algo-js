const helpers=require("./Helpers.js");
const prompt = require('prompt-sync')();

const bestNumber = 42;
let input;

input = askForInput("What is you favorite number ? ");

while(!inputIsBestNumber(input, bestNumber)){
    input = askForInput("Are you sure ? ");
}

function askForInput(message){

    do{
        input = prompt(message) ;
    }
    while(helpers.isNullOrEmpty(input));
    
    return input;
}

function inputIsBestNumber(input, comparison) {
    return input == comparison;
}

