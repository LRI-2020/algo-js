// const prompt = require('prompt-sync')();
// const helpers=require("./Helpers.js");

import {isNumericString, isValidNumericInput} from "./Helpers.js";

const min = 1;
const max = 10;
let count;

function runExercice2_7(){

    do{
        count = prompt("How much numbers do you want to enter (max :" + max +" )? ");

    }while(!isValidNumericInput(count,min,max));

    let result = computeSum(Number(count));

    alert("Total sum is " + result);
}


function computeSum(count)
{
    let sum=0;

    for(let i=0; i<count;i++){

        let input;

        do {
            input = prompt("Enter a number : ");
        } while (!isNumericString(input));

        sum+= Number(input);
    }
    
    return sum;
}

export{runExercice2_7};