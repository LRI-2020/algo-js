﻿// const prompt = require('prompt-sync')();
// const helpers=require("./Helpers.js");

import {isNumericString} from "./Helpers.js";

function runExercice2_2()
{
    let min, max, current;
    let isMinMaxOk;

    min = askNumberAsInput("Please, enter a number as minimum : ");

    do {
        max = askNumberAsInput("Please, enter a number as maximum : ");

        isMinMaxOk = checkMinMax(min,max);
    }
    while(!isMinMaxOk);


    current = askNumberAsInput("Please, enter a number to compare with min and max: ");

    checkCurrent(min,max,current);
}


// functions
function checkMinMax(min,max){
    if(isMinInfToMax(min,max)){
        return true;
    }
    
    else{
        alert("Min should be < Max");
        return false;
    }
}
function isMinInfToMax(min, max){
    return min < max;
}
function askNumberAsInput(message){
   let input, isANumber;
   
   do {
        input = prompt(message);
        isANumber = isNumericString(input);
    }
    while(!isANumber);
   
   return Number(input);
}

function checkCurrent(min, max, current){

    if(current >= min && current<=max){
        alert(current + " is between " + min + " and " + max + ".");
    }

    else{
        alert(current + " is not between " + min + " and " + max + ".");
    }
}

export {runExercice2_2};