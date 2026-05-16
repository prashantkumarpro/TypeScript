interface Chai {
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop { 
    readonly id: number
    name : string
}

const s:Shop = {id:1, name:"Chaicode Caffe"};
// s.id = 2

interface DiscountCalculator {
    (price : number) : number
}

const apply50:DiscountCalculator = (p) =>p * 0.5

interface TeaMachine{
    start(price:number) : void
    stop() : void
}

const machine : TeaMachine = {
    start(){
        console.log("Start");
        
    },
    stop(){
        console.log("Stop");
        
    }
}


interface ChaiRatings {
    [flavor:string] :number
}

const ratings : ChaiRatings = {
    msala:4.5,
    ginger:4.4,
}


interface User {
    name : string
}

interface User {
    age:number
}

const u:User = {
    name : "PK",
    age:22
}

interface A {a:string}
interface B {b:string}

interface C extends A, B {}


