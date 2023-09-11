﻿function askForNumericString(message) {

    let input;
    do {
        input = prompt(message);

    } while (!isNumericString(input));

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

export {isPositiveIntegerString, isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit, askForNumericString, rand10, randMinMax};
