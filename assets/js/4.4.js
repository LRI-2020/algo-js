import {isValidNumericInput, randMinMax} from "./Helpers.js";

function runExercice4_4() {
    let learners = ["Alexandre Va", "Alexandre Ve", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth", "Elodie", "Justin", "Justine F", "Justine M","Kimi", "Layla", "Lidwine","Lucas","Marie","Mathias","Okly","Pierre","Robin","Rosalie","Stephane","Tim","Tom","Valentin","Virginie"];
    let count;    
  
    do{
        count = prompt("How many learners do you want to display? Min: 1 and max : " + learners.length)
    }while(!isValidNumericInput(count,1,learners.length));
    
    let result = pickLearner(learners,count);    
    alert(result.toString());
      
}
function pickLearner(inputAr, n){
    
    let learners = [];
    
    //get element of the array randomly based on count requested
    for (let i = 0; i<n;i++){
        
        let index = randMinMax(0,inputAr.length-1);
        learners.push(inputAr[index]);
        inputAr.splice(index, 1) ; // remove element from original arr  to avoid duplicate 
    }
    
    return learners;    
}

export {runExercice4_4};