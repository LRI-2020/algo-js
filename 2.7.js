const prompt = require('prompt-sync')();

const min = 1;
const max = 10;
let count;

do{
    count = prompt("How much numbers do you want to enter (max :" + max +" )? ");

}while(!isValidInput(count,min,max));

let result = computeSum(Number(count));

console.log("Total sum is " + result);

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
