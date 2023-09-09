// const prompt = require('prompt-sync')();
// const helpers=require("./Helpers.js");

import {isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit} from "./Helpers.js";

function runExercice2_1(){
    let age;

    do {
        age = prompt("What's your age?");
    }
    while(!isNumericString(age));

    checkAge(Number(age));

}

function checkAge(age){
    if(age >= 18){
        alert("You're an adult");
    }
    else{
        alert("You're not yet an adult");
    }
}

export {runExercice2_1};