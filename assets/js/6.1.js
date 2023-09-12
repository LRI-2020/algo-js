 import {circle} from "./classes.js";
function runExercice6_1() {

    let circle1 = new circle(2,4, 3);
    console.log("original position of circle = " + circle1.origin.abscissa + "," + circle1.origin.ordered);
    circle1.move(5,6);
    console.log("new position after moving 5,6 = " + circle1.origin.abscissa + "," + circle1.origin.ordered);    
    console.log("surface of my circle having r = " + circle1.radius + " is : " + circle1.surface)

}

export {runExercice6_1};