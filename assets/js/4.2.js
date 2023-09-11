
function runExercice4_2() {
       
    alert(rand10());
}

function rand10() {

    let min = Math.ceil(1);
    let max = Math.floor(11);
    return Math.floor(Math.random() * (max - min) + min);
}

export {runExercice4_2};