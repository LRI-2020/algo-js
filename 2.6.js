const prompt = require('prompt-sync')();

let input;
const minDay = 1;
const maxDay=7;

do {
    input = prompt("Please, enter a number between 1 and 7 : ");

}while(!isValidInput(input,minDay,maxDay));

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
function isValidInput(input,min, max){
    
    if(!isNumericString(input)){
        return false;
    }
    return isBetweenLimit(Number(input),min,max);
}

function isNumericString(input) {
    return typeof input === 'string' && !isNaN(input) && !isNullOrEmpty(input);
}
function isBetweenLimit(input, min, max){
    
    return (input >= min && input<=max);
}

function isNullOrEmpty(str){
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}
