function getMin(array) {

    let min = Number.MAX_SAFE_INTEGER;

    for (let item of array) {

        if(item<min){
            min=item;
        }
        //min = number < min ? number : min;
    }

    return min;
}

function getMax(array) {

    let max = Number.MIN_SAFE_INTEGER;

    for (let item of array) {
    
        if(item>max){
            max = item;
        }
       // max = number > max ? number : max;
    }

    return max;
}
function runExercice3_4() {

    let array1 = [4, -1, 0, 2.4, 50, 3.6]
    // let array1 = [4, 1, 0, 2, 5, 6]
    let min = getMin(array1);
    let max = getMax(array1);
    
    console.log("The array was : " + array1.toString())
    console.log("The min is = " + min);
    console.log("The max is = " + max);
    
    alert("open the console to see the result of the exercice!");
    
}

export {runExercice3_4};