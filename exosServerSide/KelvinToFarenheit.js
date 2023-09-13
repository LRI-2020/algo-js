const helpers = require("./Helpers.js");
const prompt = require('prompt-sync')();

KTFStart();
function isValidKelvinTemp(number) {

    return helpers.isValidNumericInput(number, 0, Number.MAX_VALUE);
}

function ConvertKToC(number) {
    
    return Math.floor(number-273.15);
}

function ConvertKToF(number) {
 
   return Math.floor((ConvertKToC(number)) * 1.8 + 32);
    
}

function KTFStart() {

    let input;

    do {
        input = prompt("Enter the temperature you want to convert to Fahrenheit : ");
        
        if(input === null){
            break;
        }

    } while (!isValidKelvinTemp(input));

    if (input !== null) {
        let Cel = ConvertKToC(Number(input));
        let Far= ConvertKToF(Number(input));
       console.log(input + " Kelvin equals " + Far + " Fahrenheit")
       console.log(input + " Kelvin equals " + Cel + " Celsius")
    }


}