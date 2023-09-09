const prompt = require('prompt-sync')();

for(let i=1;i<=100;i++){
    if (i%2===0){
        console.log("division of " + i + " by 2 = " + i/2);
    }
    
    else{
        console.log("multiplication of " + i + " by 3 = " + i*3);
    }
    
}