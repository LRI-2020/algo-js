// import {askTvSerie} from "./Helpers.js";
import {Rectangle} from "./classes.js";

function runExercice6_3() {

    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","rectangles");
    canvas.setAttribute("width","1000");
    canvas.setAttribute("height","1000");
    const div = document.getElementById("Ex-6-3");
    div.appendChild(canvas);
 
   
    let refRectangle =  new Rectangle(0,0,900,900);
    drawRectangle(refRectangle,canvas);

    let count = prompt("How many collided rectangles do you want?");
    
    let counter=0;
   
 while(counter < count){
     
     let currentRect = generateRandomRectangle();
     
     if(refRectangle.collidesWith(currentRect)){
         drawRectangle(currentRect,canvas);
         counter++
     }
 }}
function generateRandomRectangle(){
    
    return new Rectangle(getRandomArbitrary(0,500), getRandomArbitrary(0,500), getRandomArbitrary(10,300), getRandomArbitrary(10,300));
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function drawRectangle(rectangle, canvas)
{    
    const ctx = canvas.getContext("2d");
    ctx.rect(rectangle.topLeft.abscissa, rectangle.topLeft.ordered, rectangle.width, rectangle.height);
    ctx.stroke();
}


export {runExercice6_3};