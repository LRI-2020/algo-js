import {askForNotEmptyInput} from "./Helpers.js";

function runExercice5_1() {

    let name = askForNotEmptyInput("Enter the name of your serie");
    let year = askForNotEmptyInput("Enter the year of your serie");
    let casting;
    
    do {
        casting = askForNotEmptyInput("Enter the name of the actors divided by a comma (Eg:) 'Jensen Ackles, Jared Padalecki'").split(",");
    }while(!isValidArray(casting));
    
    let serie = new tvSerie(name,year,casting);

    console.log(JSON.stringify(serie));
    alert(JSON.stringify(serie));
    
}

class tvSerie {
    constructor(name, year, casting = []) {
        this.name = name;
        this.year = year;
        this.casting = casting;
    }
}

function isValidArray(array){
    
    if (!(Array.isArray(array) && array.length > 0)){
        alert("Please enter the casting with correct format : the name of the actors should be divided by a comma (Eg:) 'Jensen Ackles, Jared Padalecki'")
        return false;
    }
    
    return true;
}

export {runExercice5_1};