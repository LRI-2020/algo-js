import {isNumericString} from "./Helpers.js";

function runExercice4_5() {
       
    let inputPointA;
    let inputPointB;
    
    do{
        inputPointA = prompt("enter coordinates of first point divided by a comma (e.g: '4,5')");
    }while(!IsValidPoint(inputPointA));

    do{
        inputPointB = prompt("enter coordinates of second point divided by a comma (e.g: '4,5')");
    }while(!IsValidPoint(inputPointB));
    
    let pointA = parseToPoint(inputPointA);
    let pointB = parseToPoint(inputPointB);
    
    let distance = calcDist(pointA,pointB);
    
    alert("The distance between your two points is : " + distance);
    
}

function calcDist(pointA, pointB){
    
    return Math.sqrt(Math.pow((pointB.abscissa-pointA.abscissa),2) + Math.pow((pointB.ordered-pointA.ordered),2));
}

function IsValidPoint(inputPointA) {

    let coordinates = inputPointA.split(',');

    if(Array.isArray(coordinates) && coordinates.length === 2)
    {
        for(let coor of coordinates)
        {
            if(!isNumericString(coor))
            {
                return false;
            }
        }
        return true;
    }
    return false;
}

function parseToPoint(input){

    let coordinates = input.split(',');

    return new Point(Number(coordinates[0]), Number(coordinates[1]));
}

class Point {
    constructor(abscissa, ordered) {
        this.abscissa = abscissa;
        this.ordered = ordered;
    }
}

export {runExercice4_5};