import {isValidNumericInput,askForNumericString, rand10} from "./Helpers.js";

function runExercice4_3() {
       
    let count;
    
    do {
        count = prompt("How many random number do you want?(max : 50)");
    }
    while(!isValidNumericInput(count,1,50));
    
    multiRand(count);
}

function multiRand(n){
    let result = [];
    
    for (let i = 0;i<n;i++){
        result.push(rand10());
    }
    
    alert(result.toString());
 
}

export {runExercice4_3};