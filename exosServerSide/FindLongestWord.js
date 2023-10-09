const prompt = require('prompt-sync')();
function returnLongestWord(input){
    
    let words = input.split(" ");
    
    let longestW = words[0];
    for(let word of words){
        
        longestW = word.length > longestW.length? word:longestW;
    }
    
    return longestW;
}

let input = prompt("enter a phrase : ");

console.log("this is the longest word : " + returnLongestWord(input));