

function askForNumericString(message){

    let input;
    do{
        input = prompt(message);

    }while(!isNumericString(input));

    return input;
}

function rand10() {

    let min = Math.ceil(1);
    let max = Math.floor(11);
    return Math.floor(Math.random() * (max - min) + min);
}


function isValidNumericInput(input, min, max){

    if(!isNumericString(input)){
        return false;
    }
    return isBetweenLimit(Number(input),min,max);
}

function isBetweenLimit(input, min, max){

    return (input >= min && input<=max);
}

function isNumericString(input) {
    return typeof input === 'string' && !isNaN(input) && !isNullOrEmpty(input);
}


function isNullOrEmpty(str){
    return str === '' || str === null || str === undefined || str.trim().length === 0;
}
export{ isNullOrEmpty, isNumericString, isValidNumericInput, isBetweenLimit, askForNumericString, rand10};
