const prompt = require('prompt-sync')();

let input1 = prompt('enter a string : ');

let array = input1.split('');

if(input1 === array.reverse().join('')){
    console.log("pallindrome");
}

else{
    console.log("not a pallindrome");
}

//reimplement reverse method myself for fun
// let stop = array.length%2===0? (array.length/2) : Math.floor((array.length/2));
// let invertedArray = [];
// let j = array.length-1;
//
// for(let i = 0 ; i<=stop;i++){
//    
//     let temp = array[i];
//         invertedArray[i] = array[j];
//         invertedArray[j] = temp;
//         j--;
//    
// }
//
// if(array.join('') === invertedArray.join('')){
//     console.log("pallindrome");
// }
//
// else{
//     console.log("not a pallindrome");
// }


