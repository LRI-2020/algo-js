const prompt = require('prompt-sync')();

// let input = prompt('enter string : ');
// console.log(swap(input));
// function swap(str){
//    
//     return str.split(' ').reverse().join(' ');
//    
// }
//

// let input = prompt('enter array of number separated by a comma : ').split(',').map((n) => Number(n));
//
// console.log(getOdds(input));
// function getOdds(input){
//    
//    return input.filter((n)=> n%2===0)
// }

// let input = prompt('enter a word : ');
// let count = Number(prompt('enter a number : '));
//
// console.log(repeat(input,count));
// function repeat(str,n){
//    
//    
//     if(n<=0)
//         return str;
//
//     let res = '';
//     let i = 0;
//     while(i<count){
//       
//         res+=str;
//         i++;
//     }
//    
//     return res;
// }

let input = prompt('enter array of number : ');

console.log(findLargestNum(input.split(',').map((n)=> Number(n))));
function findLargestNum(arr) {
   return arr.reduce((a,b) => a>b?a:b);
}