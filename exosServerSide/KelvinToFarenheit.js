const helpers = require("./Helpers.js");
const prompt = require('prompt-sync')();

KTFStart();
function isValidKelvinTemp(number) {

    return helpers.isValidNumericInput(number, 0, Number.MAX_VALUE);
}

function convertKToF(number) {
 
   return (number - 273.15) * 1.8 + 32;
    
}

function KTFStart() {

    let input;

    do {
        input = prompt("Enter the temperature you want to convert to Kelvin : ");
        
        if(input === null){
            break;
        }

    } while (!isValidKelvinTemp(input));

    if (input !== null) {
       let tempInFahrenheit= convertKToF(Number(input));
       console.log(input + " Kelvin equals " + tempInFahrenheit + " Fahrenheit")
    }


}