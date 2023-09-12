import {TestCase, Rectangle} from "./classes.js";


function createTC(){
    let testCasesRepo = [];

    //No collision
    let TC1 = new TestCase("TC1",new Rectangle(1,2,2,3),new Rectangle(5,2,2,2),false);
    let TC2 = new TestCase("TC2",new Rectangle(1,2,2,3),new Rectangle(5,2,2,2),false);
    let TC3 = new TestCase("TC3",new Rectangle(5,2,2,2),new Rectangle(1,2,2,3),false);
    let TC4 = new TestCase("TC4",new Rectangle(5,6,2,4),new Rectangle(1,3,3,3),false);


//collision
    let TC5 = new TestCase("TC5",new Rectangle(0,4,4,10),new Rectangle(1,2,1,5),true);
    let TC6 = new TestCase("TC6",new Rectangle(-1,1,1,2),new Rectangle(-2,2,3,4),true);
    let TC7 = new TestCase("TC7",new Rectangle(1,4,2,3),new Rectangle(2,3,2,3),true);    
    
    let TC8 = new TestCase("TC8",new Rectangle(1,3,2,2),new Rectangle(3,4,1,2),true);    
    
    let TC9 = new TestCase("TC9",new Rectangle(3,4,1,2),new Rectangle(1,3,2,2),true);    
    
    let TC10 = new TestCase("TC10",new Rectangle(-2,3,1,1),new Rectangle(-5,6,3,3),true);


    let TC11 = new TestCase("TC11",new Rectangle(-5,6,3,3),new Rectangle(-2,3,1,1),true);

    let TC12 = new TestCase("TC12",new Rectangle(2,3,2,3),new Rectangle(1,4,2,3),true);

    testCasesRepo.push(TC1,TC2,TC3,TC4,TC5,TC6,TC7,TC8,TC9,TC10,TC11,TC12);
    return testCasesRepo;
}

export {createTC};

