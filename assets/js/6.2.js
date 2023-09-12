import {createTC} from "./TCRepoFor6_2.js";

function runExercice6_2() {

    let allTC = createTC();
    
    for(let tc of allTC )
    {
        console.log(tc.name + tc.dumpState());    
        
    }

}

export {runExercice6_2};