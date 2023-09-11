import {askForNumericString, isPositiveIntegerString} from "./Helpers.js";

function runExercice4_6() {
    
    let input;
    
    do{
       input= prompt("Enter the number of which you want the factorial") 
    }while (!isPositiveIntegerString(input));
    
    alert("The factorial of " + input + " is " + factorial(Number(input)));    
}

function factorial(n){
    
    if(n === 0){
        return 1;
    }
    let result = 1;
    
    for(let i = n; i>0;i--){
        
        result*=i;
    }
    
    return result;
}

export {runExercice4_6};