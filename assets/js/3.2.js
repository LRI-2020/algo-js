

function runExercice3_2(){    
    
    let arr1 = [1,2,3,4,5];
    let arr2 = [100,101,102];

    alert(`The avg of first array = ${runAvg(arr1)}
The avg of second array = ${runAvg(arr2)}`);
}

function runAvg(arr1) {

    let sum=0;
    let itemsCount= arr1.length;
    
    for (let item of arr1){

        sum+=item;
    }

    return sum/itemsCount;
}


export {runExercice3_2};