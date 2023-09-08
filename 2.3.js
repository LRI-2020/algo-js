const prompt = require('prompt-sync')();

// for version - 50 executions

let count = 0;

for(let i=2;i<=100;i++){
    if (i%2===0){
        console.log(i);
        i++
    }    
    count++;
    if(i>=100){
        console.log("This loop has been executed " + count + " times.");
    }
}

// While version - 100 executions

let i = 1;

while(i<=100){
    if(i%2===0){
        console.log(i);
    }

    i++;
}