const prompt = require('prompt-sync')();
const helpers=require("./Helpers.js");


let age;

do {
    age = prompt("What's your age?");
}
while(!helpers.isNumericString(age))


checkAge(Number(age));

function checkAge(age){
    if(age >= 18){
        console.log("You're an adult");
    }
    else{
        console.log("You're not yet an adult");
    }
}

