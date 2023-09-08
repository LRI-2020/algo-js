const prompt = require('prompt-sync')();
const helpers=require("./Helpers.js");


const min = 1;
const max = 10;
let count;

do{
    count = prompt("How much numbers do you want to enter (max :" + max +" )? ");

}while(!helpers.isValidInput(count,min,max));

let result = computeSum(Number(count));

console.log("Total sum is " + result);

function computeSum(count)
{
    let sum=0;

    for(let i=0; i<count;i++){

        let input;

        do {
            input = prompt("Enter a number : ");
        } while (!helpers.isNumericString(input));

        sum+= Number(input);
    }
    
    return sum;
}