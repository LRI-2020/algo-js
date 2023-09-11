import {askForNumericString} from "./Helpers.js";
function runExercice4_1() {

    let width = askForNumericString("What is the width of your rectangle ?");
    let length = askForNumericString("What is the lenght of your rectangle ?");
    
    alert("The surface of your rectangle is : " + calcSurface(width, length));  
}

function calcSurface(width,length){
    
    return width*length;
}

export {runExercice4_1};