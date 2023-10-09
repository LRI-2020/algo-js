const prompt = require('prompt-sync')();

let number1 = Number(prompt('enter a number : '));
let number2 = Number(prompt('enter a second number : '));

let range = number1>number2? [number2,number1] : [number1,number2];

let sum=0;

for(let i=range[0];i<=range[1];i++){
    
    sum+=i;
    
}

console.log("sum of range [" + number1 + ","+number2+"] equals : " + sum);