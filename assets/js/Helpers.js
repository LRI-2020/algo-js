import { tvSerie} from "./classes.js";
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

export {askTvSerie,isValidArray,askForNotEmptyInput,isPositiveIntegerString, isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit, askForNumericString, rand10, randMinMax};


//first evrsion for collide


// function getPointsVerticalLine(point1, point2) {
//
//     if (point1.abscissa !== point2.abscissa) {
//
//         throw new Error('line os not vertical');
//     }
//
//     return getAllY(point1, point2);
//
// }
//
// function getPointsHorizontalLine(point1, point2) {
//
//     if (point1.ordered !== point2.ordered) {
//
//         throw new Error('line is not horizontal');
//     }
//
//     return getAllX(point1, point2);
// }
//
// function getAllY(point1, point2) {
//     let result = [];
//
//     if (point2.ordered - point1.ordered > 0) {
//         for (let i = point1.ordered; i <= point2.ordered; i++) {
//             let currentPoint = new Point(point1.abscissa, i);
//             result.push(currentPoint);
//         }
//         return result;
//     }
//
//     for (let i = point2.ordered; i <= point1.ordered; i++) {
//         let currentPoint = new Point(point1.abscissa, i);
//         result.push(currentPoint);
//     }
//
//     return result;
// }
//
// function getAllX(point1, point2) {
//     let result = [];
//
//     if ((point2.abscissa - point1.abscissa) > 0) {
//         for (let i = point1.abscissa; i <= point2.abscissa; i++) {
//             let currentPoint = new Point(i, point1.ordered);
//             result.push(currentPoint);
//         }
//         return result;
//     }
//
//     for (let i = point2.abscissa; i <= point1.abscissa; i++) {
//         let currentPoint = new Point(i, point1.ordered);
//         result.push(currentPoint);
//     }
//
//     return result;
// }



