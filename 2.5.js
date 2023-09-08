//import { isNullOrEmpty} from 'Helpers.mjs';

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
    while(isNullOrEmpty(input));
    
    return input;
}

function inputIsBestNumber(input, comparison) {
    return input == comparison;
}

function isNullOrEmpty(str){
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}
