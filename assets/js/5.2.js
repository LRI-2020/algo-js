import {askTvSerie} from "./Helpers.js";
function runExercice5_2() {
    
    let serie = askTvSerie();
    
    console.log(JSON.stringify(randomizeCast(serie)));
    alert("The casting of your serie is displayed in a random order in the console!");    
    
}

function randomizeCast(tvSerie){
    
    let cast = tvSerie.casting;    

    for (let i = cast.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = cast[i];
        cast[i] = cast[j];
        cast[j] = temp;
    }    
    return cast;
}

export {runExercice5_2};