const prompt = require('prompt-sync')();
function isPermutationOfEachOther(input1,input2){


if(input1.length !== input2.length){
    return false;
}

let sorted1 = Array.from(input1.toLowerCase()).sort().join('');
let sorted2 = Array.from(input2.toLowerCase()).sort().join('');

// for (let character of sorted1){
//    
//     if(character !== sorted2[sorted1.indexOf(character)]){
//         return false;
//     }
// }
    
    if(sorted1 !== sorted2)
        return false;
       
    return true;
}

let input1 = prompt("enter input 1 : ");
let input2 = prompt("enter input 2 : ");

console.log("These input are a permutation of each other : " + isPermutationOfEachOther(input1,input2));