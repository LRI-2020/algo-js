// const prompt = require('prompt-sync')();
// const helpers=require("./Helpers.js");
import {isValidNumericInput} from "./Helpers.js";

let input;
const minDay = 1;
const maxDay=7;

function runExercice2_6(){

    do {
        input = prompt("Please, enter a number between 1 and 7 : ");

    }while(!isValidNumericInput(input,minDay,maxDay));

    giveDayOfWeek(Number(input));
}

function giveDayOfWeek(input){
    switch(input){
        
        case 1 : 
            alert("Monday");
            break;
        case 2 : 
            alert("Tuesday");
            break;
        case 3 : 
            alert("Wednesday");
            break;
        case 4 : 
            alert("Thursday");
            break;
        case 5 : 
            alert("Friday");
            break;
        case 6 : 
            alert("Saturday");
            break;
        case 7 : 
            alert("Sunday");
            break;
        default:alert("Day unknown ...")  ;  
    }
}

export {runExercice2_6};