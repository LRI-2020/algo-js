const prompt = require('prompt-sync')();

let age= Number(prompt("What's your age?"));
checkAge(age);

function checkAge(age){
    if(age >= 18){
        console.log("You're an adult");
    }
    else{
        console.log("You're not yet an adult");
    }
}

