
function runExercice3_1(){

    let arr1 = [1,2,3,4,5];
    let arr2 = [100,101,102];

    alert(`The sum of first array = ${runSum(arr1)}
The sum of first array = ${runSum(arr2)}`);
}

function runSum(arr1) {

    let result = 0;
    for (let item of arr1){

        result+=item;
    }

    return result;
}

export {runExercice3_1};