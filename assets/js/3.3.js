

function runExercice3_3(){
    
    let originalArray = ["apple","peach","strawberry"];
    
    let copyUsingPush = copyWithPush(originalArray);
    
    let copyUsingSlice = copyWithSlice(originalArray);

    console.log("The orginal array is : ");
    readArray(originalArray);
    
    console.log("The copy with push method is : ");
    readArray(copyUsingPush);

    console.log("The copy with slice method is : ");
    readArray(copyUsingSlice);
    
}

function copyWithPush(array){
    let newArray = [];
    
    for(let item of array){
        
        newArray.push(item);
    }
    
    return newArray;
}

function copyWithSlice(array){
    return array.slice();
}

function readArray(array){

    for(let item of array){
        console.log(item);
    }
}

export {runExercice3_3};