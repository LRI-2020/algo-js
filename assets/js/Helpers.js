import {tvSerie} from "./classes.js";
function askForNumericString(message) {

    let input;
    do {
        input = prompt(message);

    } while (!isNumericString(input));

    return input;
}

function askForNotEmptyInput(message){
    let input;
    do {
        input = prompt(message);

    } while (isNullOrEmpty(input));

    return input;
}

function rand10() {

    let min = Math.ceil(1);
    let max = Math.floor(11);
    return Math.floor(Math.random() * (max - min) + min);
}

function randMinMax(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}


function isValidNumericInput(input, min, max) {

    if (!isNumericString(input)) {
        return false;
    }
    return isBetweenLimit(Number(input), min, max);
}

function isBetweenLimit(input, min, max) {

    return (input >= min && input <= max);
}

function isNumericString(input) {
    return typeof input === 'string' && !isNaN(input) && !isNullOrEmpty(input);
}

function isPositiveIntegerString(input) {
    if (isNumericString(input)) {

        if (Number.isInteger(Number(input)) && Number(input) >= 0) {
            return true;
        }
        alert("Number should be > 0 and an integer")
    }

    return false;
}


function isNullOrEmpty(str) {
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}

function splitIntoArray(input,separator){
    
    return input.split(separator);
}

function isValidArray(array){

    if (!(Array.isArray(array) && array.length > 0)){
        alert("Please enter the casting with correct format : the name of the actors should be divided by a comma (Eg:) 'Jensen Ackles, Jared Padalecki'")
        return false;
    }

    return true;
}

function askTvSerie(){
    let name = askForNotEmptyInput("Enter the name of your serie");
    let year = askForNotEmptyInput("Enter the year of your serie");
    let casting;

    do {
        casting = askForNotEmptyInput("Enter the name of the actors divided by a comma (Eg:) 'Jensen Ackles, Jared Padalecki'").split(",");
    } while (!isValidArray(casting));

    return new tvSerie(name, year, casting);

}

class Point {
    constructor(abscissa, ordered) {
        this.abscissa = abscissa;
        this.ordered = ordered;
    }
}

export {Point, askTvSerie,isValidArray,askForNotEmptyInput,isPositiveIntegerString, isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit, askForNumericString, rand10, randMinMax};
