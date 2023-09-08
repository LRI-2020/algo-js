const prompt = require('prompt-sync')();
const helpers=require("./Helpers.js");

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

// functions
function checkMinMax(min,max){
    if(isMinInfToMax(min,max)){
        return true;
    }
    
    else{
        console.log("Min should be < Max");
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
        isANumber = helpers.isNumericString(input);
    }
    while(!isANumber);
   
   return Number(input);
}

function checkCurrent(min, max, current){

    if(current > min && current<max){
        console.log(current + " is between " + min + " and " + max + ".");
    }

    else{
        console.log(current + " is not between " + min + " and " + max + ".");
    }
}
