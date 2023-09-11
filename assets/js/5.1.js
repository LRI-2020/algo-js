import {askTvSerie} from "./Helpers.js";
function runExercice5_1() {

    let serie = askTvSerie();
    console.log(JSON.stringify(serie));
    alert(JSON.stringify(serie));
}

export {runExercice5_1};