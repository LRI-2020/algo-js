const prompt = require('prompt-sync')();

let min = askNumberAsInput("Please, enter a number as minimum : ");

let max = askNumberAsInput("Please, enter a number as maximum : ");

let current = askNumberAsInput("Please, enter a number to compare with min and max: ");

checkCurrent(min,max,current);

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

    if(current > min && current<max){
        console.log(current + "is between " + min + " and " + max + ".");
    }

    else{
        console.log(current + "is not between " + min + " and " + max + ".");
    }
}
function isNumericString(input) {
    return typeof input === 'string' && !isNaN(input) && !isNullOrEmpty(input);
}

function isNullOrEmpty(str){
    
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}
