// ===============================
// OOPs (Object-Oriented Programming) in TypeScript
// Fully Commented Version
// ===============================



// ======================================================
// 1. CLASS AND CONSTRUCTOR
// ======================================================

// A class is like a blueprint/template.
// We create objects from a class.

// class Chai {
//     // Properties (variables inside class)
//     flavour: string;
//     price: number;

//     // Constructor runs automatically
//     // when object is created

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;
//         this.price = price;
//     }
// }

// Creating object from class
// const masalaChai = new Chai("Ginger", 20);





// ======================================================
// Constructor Example
// ======================================================

class Chai {

    // public means accessible everywhere
    public flavour: string = "Masala"

    // constructor initializes values
    constructor(flavour: string) {

        // this refers to current object
        this.flavour = flavour;

        // prints current object
        console.log(this);
    }
}

// Creating object
const masalaChai = new Chai("Ginger");

// Updating property value
masalaChai.flavour = "Adrak";





// ======================================================
// 2. ACCESS MODIFIERS
// public, private, protected
// ======================================================

class Tea {

    // public → accessible everywhere
    public flavour: string = "Masala";

    // private → accessible only inside this class
    private secretIngredients = "Cardamom";

    // Method inside class can access private properties
    reveal() {

        // Allowed because it is inside same class
        return this.secretIngredients;
    }
}

// const tea = new Tea();

// ❌ Error because private property
// cannot be accessed outside class
// tea.secretIngredients





// ======================================================
// 3. PROTECTED
// ======================================================

class Shop {

    // protected means:
    // accessible inside class
    // AND child classes

    protected shopName = "Apna Chai";
}

// Branch inherits Shop
class Branch extends Shop {

    getName() {

        // Allowed because Branch is child class
        return this.shopName;
    }
}

// const branch = new Branch();
// console.log(branch.getName());



// ❌ Not allowed outside class
// console.log(branch.shopName);





// ======================================================
// 4. PRIVATE FIELD (# syntax)
// Modern JavaScript private field
// ======================================================

class Wallet {

    // # makes truly private field
    #balance = 100;

    getBalance() {

        // Accessible inside class
        return this.#balance;
    }
}

const w = new Wallet();

console.log(w.getBalance());

// ❌ Error
// console.log(w.#balance);





// ======================================================
// 5. READONLY PROPERTY
// ======================================================

class Cup {

    // readonly means value cannot change later
    readonly capacity: number = 250;

    constructor(capacity: number) {

        // Allowed inside constructor
        this.capacity = capacity;
    }
}

const cup1 = new Cup(300);

console.log(cup1.capacity);

// ❌ Error because readonly
// cup1.capacity = 500;





// ======================================================
// 6. GETTER AND SETTER
// Used to control reading/writing values
// ======================================================

class ModernChai {

    // private property
    private _sugar = 2;

    // Getter → used for reading value
    get sugar() {

        return this._sugar;
    }

    // Setter → used for updating value
    set sugar(value: number) {

        // Validation
        if (value > 5) {

            throw new Error("Too sweet");
        }

        this._sugar = value;
    }
}

const chai1 = new ModernChai();

// Calls setter
chai1.sugar = 3;

// Calls getter
console.log(chai1.sugar);





// ======================================================
// 7. STATIC PROPERTY
// ======================================================

class EkChai {

    // static belongs to class itself
    // not to objects
    static shopName = "Chaicode Cafe";

    constructor(public flavour: string) {}
}

// Accessing static property using class name
console.log(EkChai.shopName);

// Creating object
const chaiObj = new EkChai("Masala");

// ❌ Static property cannot be accessed
// from object
// console.log(chaiObj.shopName);





// ======================================================
// 8. ABSTRACT CLASS
// ======================================================

// Abstract class is used as base blueprint

abstract class Drink {

    // Abstract method
    // Child class MUST implement this
    abstract make(): void;
}

// Child class
class MyChai extends Drink {

    make(): void {

        console.log("Brewing Chai");
    }
}

const myTea = new MyChai();

myTea.make();





// ======================================================
// 9. COMPOSITION
// "One class uses another class"
// ======================================================

// Heater class
class Heater {

    heat() {

        console.log("Heating water...");
    }
}

// ChaiMaker uses Heater
class ChaiMaker {

    // Injecting Heater object
    constructor(private heater: Heater) {}

    make() {

        // Using Heater functionality
        this.heater.heat();

        console.log("Making chai...");
    }
}

// Creating heater object
const heater = new Heater();

// Passing heater into ChaiMaker
const chaiMaker = new ChaiMaker(heater);

chaiMaker.make();





// ======================================================
// IMPORTANT OOP CONCEPTS
// ======================================================

// Class
// → Blueprint/template

// Object
// → Real instance created from class

// Constructor
// → Initializes values

// Encapsulation
// → Hiding internal data using private

// Inheritance
// → Child class reuses parent class

// Polymorphism
// → Same method behaves differently

// Abstraction
// → Hiding implementation details

// Composition
// → One object uses another object





// ======================================================
// QUICK SUMMARY
// ======================================================

// public
// → accessible everywhere

// private
// → accessible only inside same class

// protected
// → accessible inside class + child class

// readonly
// → value cannot change after initialization

// static
// → belongs to class itself

// abstract
// → blueprint class that cannot create objects