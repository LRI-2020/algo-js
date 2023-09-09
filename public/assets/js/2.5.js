// const helpers=require("./Helpers.js");
// const prompt = require('prompt-sync')();
import {isNullOrEmpty} from "./Helpers.js";


const bestNumber = 42;
let input;
function runExercice2_5(){

    input = askForInput("What is you favorite number ? ");

    while(!inputIsBestNumber(input, bestNumber)){
        input = askForInput("Are you sure ? ");
    }

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

export {runExercice2_5}