// const prompt = require('prompt-sync')();
// for version - 50 executions

function runExercice2_3(){
    
    loop50();
    while100();    
}

function loop50(){
    console.log("For version")
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
}

function while100(){
    console.log("While version")

    let i = 1;

    while(i<=100){
        if(i%2===0){
            console.log(i);
        }

        
        if(i===100){
            console.log("This loop has been executed " + i + " times.");
        }

        i++;

    }

}

export {runExercice2_3};
