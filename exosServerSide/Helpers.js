

function isValidNumericInput(input, min, max){

    if(!isNumericString(input)){
        return false;
    }
    return isBetweenLimit(Number(input),min,max);
}

function isBetweenLimit(input, min, max){
    if(!(input >= min && input<=max)){
        console.log("Enter a valid number between " + min + "and " + max);
        
    }
    return (input >= min && input<=max);
}

function isNumericString(input) {
    return typeof input === 'string' && !isNaN(input) && !isNullOrEmpty(input);
}


function isNullOrEmpty(str){
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}

function randMinMax(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = { isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit, randMinMax};

