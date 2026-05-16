// ===============================
// INTERFACE BASICS IN TYPESCRIPT
// ===============================

// An interface is like a blueprint or structure.
// It defines how an object should look.

// This interface says:
// Any Chai object must have:
// - flavor → string
// - price → number
// - milk → optional boolean
interface Chai {
    flavor: string;
    price: number;

    // ? means optional
    // The object may or may not contain this property
    milk?: boolean;
}

// Creating an object using the Chai interface
const masala: Chai = {
    flavor: "masala",
    price: 30
};

// ===============================
// READONLY PROPERTY
// ===============================

// readonly means the value cannot be changed later
interface Shop {

    // Once id is assigned,
    // it cannot be updated
    readonly id: number;

    name: string;
}

// Creating a shop object
const s: Shop = {
    id: 1,
    name: "Chaicode Caffe"
};

// ❌ Error because id is readonly
// s.id = 2;


// ===============================
// FUNCTION INTERFACE
// ===============================

// Interfaces can also define
// the structure of functions

interface DiscountCalculator {

    // This function:
    // takes a number
    // returns a number
    (price: number): number;
}

// Function matching the interface
const apply50: DiscountCalculator = (p) => p * 0.5;

// Example:
// 100 * 0.5 = 50
console.log(apply50(100));


// ===============================
// INTERFACE WITH METHODS
// ===============================

// Interfaces can define methods/functions
// inside objects

interface TeaMachine {

    // Method that starts machine
    start(price: number): void;

    // Method that stops machine
    stop(): void;
}

// Object following TeaMachine structure
const machine: TeaMachine = {

    // start method
    start() {
        console.log("Start");
    },

    // stop method
    stop() {
        console.log("Stop");
    }
};

// Calling methods
machine.start(50);
machine.stop();


// ===============================
// INDEX SIGNATURE
// ===============================

// Used when object keys are dynamic

interface ChaiRatings {

    // Key → string
    // Value → number
    [flavor: string]: number;
}

// Dynamic object
const ratings: ChaiRatings = {

    // flavor : rating
    masala: 4.5,
    ginger: 4.4,
};

// Accessing values
console.log(ratings.masala);


// ===============================
// INTERFACE MERGING
// ===============================

// TypeScript allows interfaces
// with same name to merge together

interface User {
    name: string;
}

// This interface automatically merges
// with the previous User interface
interface User {
    age: number;
}

// Final User interface becomes:
// {
//   name: string
//   age: number
// }

const u: User = {
    name: "PK",
    age: 22
};


// ===============================
// EXTENDING INTERFACES
// ===============================

// Interface A
interface A {
    a: string;
}

// Interface B
interface B {
    b: string;
}

// Interface C inherits
// properties from both A and B
interface C extends A, B {}

// Object using C
const obj: C = {
    a: "Hello",
    b: "World"
};


// ===============================
// WHY INTERFACES ARE IMPORTANT
// ===============================

// Interfaces help developers:
// ✅ write cleaner code
// ✅ avoid bugs
// ✅ improve readability
// ✅ scale large applications
// ✅ build safer products
// ✅ work better in teams


// ===============================
// REAL WORLD USE CASES
// ===============================

// Interfaces are heavily used in:
// ✅ React Props
// ✅ API Responses
// ✅ Backend Data
// ✅ Database Models
// ✅ E-commerce Products
// ✅ User Authentication
// ✅ Dashboard Systems
// ✅ SaaS Applications


// ===============================
// EXAMPLE: PRODUCT INTERFACE
// ===============================

interface Product {

    // Product title
    title: string;

    // Product price
    price: number;

    // Product stock
    stock: number;
}

// Product object
const laptop: Product = {
    title: "MacBook",
    price: 120000,
    stock: 10
};

console.log(laptop);


// ===============================
// MOST IMPORTANT THING TO REMEMBER
// ===============================

// INTERFACE = STRUCTURE / BLUEPRINT

// It helps TypeScript understand:
// "How an object should look"

// This is one of the most important
// concepts in TypeScript and React.