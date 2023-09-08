const prompt = require('prompt-sync')();
const helpers=require("./Helpers.js");

let input;
const minDay = 1;
const maxDay=7;

do {
    input = prompt("Please, enter a number between 1 and 7 : ");

}while(!helpers.isValidNumericInput(input,minDay,maxDay));

giveDayOfWeek(Number(input));


function giveDayOfWeek(input){
    switch(input){
        
        case 1 : 
            console.log("Monday");
            break;
        case 2 : 
            console.log("Tuesday");
            break;
        case 3 : 
            console.log("Wednesday");
            break;
        case 4 : 
            console.log("Thursday");
            break;
        case 5 : 
            console.log("Friday");
            break;
        case 6 : 
            console.log("Saturday");
            break;
        case 7 : 
            console.log("Sunday");
            break;
        default:console.log("Day unknown ...")  ;  
    }
}