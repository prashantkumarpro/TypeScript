// =========================
// Arrays in TypeScript
// =========================

// Array of strings
// This array can store only string values
const chaiFlavours: string[] = ["Masala", "Adrak"];

// Array of numbers
// This array can store only numbers
const chaiPrice: number[] = [10, 20];

// Another way to define arrays using Array<Type>
const rating: Array<number> = [4.5, 5.0];


// =========================
// Type with Arrays
// =========================

// Creating a custom type
// Every chai object must have:
// - name (string)
// - price (number)
type Chai = {
    name: string;
    price: number;
};

// Array of objects
// Each object follows the Chai type structure
const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 },
];


// =========================
// Readonly Arrays
// =========================

// readonly means values cannot be changed
const cities: readonly string[] = ["Delhi", "Jaipur"];

// Not allowed because readonly array cannot be modified
// cities.push("Pune");


// =========================
// Multi-Dimensional Array
// =========================

// Array inside another array
// Like rows and columns in a table
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];


// =========================
// Tuples in TypeScript
// =========================

// Tuple means:
// - fixed number of values
// - fixed types
// - fixed order

// First value must be string
// Second value must be number
let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];

// Wrong order → not allowed
// chaiTuple = [20, "Masala"];


// Tuple with optional value
// Third value is optional because of '?'
let userInfo: [string, number, boolean?];

// Valid
userInfo = ["Prashant", 25];

// Also valid
userInfo = ["Prashant", 25, true];


// =========================
// Readonly Tuples
// =========================

// Readonly tuple cannot be modified
const location: readonly [number, number] = [
    28.66,
    32.22
];

// Not allowed
// location.push(50);


// =========================
// Named Tuples
// =========================

// Named tuples improve readability
// name → string
// price → number
const chaiItems: [name: string, price: number] = [
    "Masala",
    25
];


// =========================
// Enums in TypeScript
// =========================

// Enum = group of named constant values

enum CupSize {
    SMALL,   // 0
    MEDIUM,  // 1
    LARGE    // 2
}

// Storing enum value
const size = CupSize.LARGE;


// =========================
// Numeric Enum
// =========================

enum Status {
    PENDING = 100,
    SERVED,   // 101
    CNACLED   // 102
}


// =========================
// String Enum
// =========================

enum ChaiType {
    MASALA = "Masala",
    GINGER = "Ginger"
}


// Function using enum as parameter
function makeChai(type: ChaiType) {
    console.log(`Making : ${type}`);
}

// Correct
makeChai(ChaiType.GINGER);

// Wrong because only enum values are allowed
// makeChai("masala");


// =========================
// Mixed Enum
// =========================

// Enum can contain both numbers and strings
// But usually avoid this in real projects
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

// Best practice:
// Use same data types inside enums


// =========================
// Const Enum
// =========================

// const enum improves performance
// because TypeScript removes enum object during compilation
const enum Sugers {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// Accessing enum value
const s = Sugers.HIGH;

// const s = Sugers.MEDIUM;


// =========================
// Tuple Limitation
// =========================

// Tuple with fixed types
let t: [string, number] = ["chai", 10];

// TypeScript allows push() in tuples
// This is one limitation of tuples
t.push("extra");

// Final tuple becomes:
// ["chai", 10, "extra"]
// But accessing extra values may still cause issues