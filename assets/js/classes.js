class tvSerie {
    constructor(name, year, casting = []) {
        this.name = name;
        this.year = year;
        this.casting = casting;
    }
}

class Point {
    constructor(abscissa, ordered) {
        this.abscissa = abscissa;
        this.ordered = ordered;
    }

    move(xOffset, yOffset) {

        this.abscissa += xOffset;
        this.ordered += yOffset;

    }
}

class circle {
    constructor(xPos, yPos, radius) {

        this.origin = new Point(xPos, yPos);
        this.radius = radius;

    }

    get surface() {

        return (Math.PI * Math.pow(this.radius, 2));
    }

    move(xOffset, yOffset) {

        this.origin.abscissa += xOffset;
        this.origin.ordered += yOffset;

    }
}

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, height, width) {

        this.topLeft = new Point(topLeftXPos, topLeftYPos);
        this.height = height;
        this.width = width;
        this.bottomRight = new Point(this.topLeft.abscissa + this.width, this.topLeft.ordered - this.height);
    }


    collidesWith(rectangle2) {

        let minAx = this.topLeft.abscissa;
        let maxAx = this.bottomRight.abscissa;
        let minAy = this.bottomRight.ordered;
        let maxAy = this.topLeft.ordered;

        let minBx = rectangle2.topLeft.abscissa;
        let maxBx = rectangle2.bottomRight.abscissa;
        let minBy = rectangle2.bottomRight.ordered;
        let maxBy = rectangle2.topLeft.ordered;

        let aLeftOfB = maxAx < minBx;
        let aRightOfB = minAx > maxBx;
        let aAboveB = minAy > maxBy;
        let aBelowB = maxAy < minBy;

        return !(aLeftOfB || aRightOfB || aAboveB || aBelowB);

    }

    
}

class TestCase {
    constructor(name, rect1, rect2, expectedCollision) {
        this.name = name;
        this.rect1 = rect1;
        this.rect2 = rect2;
        this.expectedResult = expectedCollision;
        this.actualResult = this.rect1.collidesWith(this.rect2);
        this.isPassed = this.expectedResult === this.actualResult;
    }

    dumpState() {

        return this.isPassed ? " has passed" : " has failed";
    }

}

export {tvSerie, Point, Rectangle, TestCase, circle}

// First version for collide


// get perimeter() {
//
//     let topWidth = getPointsHorizontalLine(this.topLeft, this.topRight);
//     let bottomWidth = getPointsHorizontalLine(this.bottomLeft, this.bottomRight);
//     let leftHeight = getPointsVerticalLine(this.topLeft, this.bottomLeft);
//     let rightHeight = getPointsVerticalLine(this.topRight, this.bottomRight);
//
//
//     return topWidth.concat(bottomWidth,leftHeight,rightHeight);
// }

// collidesWith(rectangle2) {
//
//
//     let rect2Perimeter = rectangle2.perimeter;
//     let currentRectPerimeter = this.perimeter;
//
//     for(let element of rect2Perimeter)
//     {
//
//         for(let item of currentRectPerimeter){
//             if(element.ordered === item.ordered && element.abscissa === item.abscissa){
//                 return true;
//             }
//         }
//
//         // if(currentRectPerimeter.includes(element))
//         // {
//         //     return true;
//         // }
//     }
//
//     return false;
// }

