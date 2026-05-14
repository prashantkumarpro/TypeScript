// ================================
// TYPE IN TYPESCRIPT
// ================================

// A type is used to define the shape of data.
// It can define:
// - objects
// - unions
// - intersections
// - primitives
// - functions

// Example:
type ChaiOrder = {
    type: string;     // Type of chai
    sugere: number;   // Sugar amount
    strong: boolean   // Strong chai or not
}


// Function using ChaiOrder type
function makeChai(order: ChaiOrder) {
    console.log(order);
}


// Another function using same type
function serveChai(order: ChaiOrder) {
    console.log(order);
}



// ================================
// TYPE FOR OBJECT STRUCTURE
// ================================

// Type describing tea recipe
type TeaRecipe = {
    water: number;
    milk: number;
}


// Class implementing TeaRecipe structure
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}



// ================================
// UNION TYPES
// ================================

// Union type means value can be one of multiple options

// type CupSize = "small" | "large"


// ❌ Classes cannot implement union types directly

// class Chai implements CupSize {

// }



// ================================
// INTERFACE IN TYPESCRIPT
// ================================

// An interface is also used to define the structure of objects/classes.

// Interfaces are mostly used with:
// - classes
// - object structures
// - React props
// - large applications


interface CupSize {

    // Only these two values are allowed
    size: "small" | "large"
}


// Class implementing interface
class Chai implements CupSize {

    // Must follow interface structure
    size: "small" | "large" = "large"
}



// ================================
// UNION OBJECT TYPES
// ================================

// Union object type
// Means object can be one of these shapes

// type Response = {ok:true} | {ok:false};


// ❌ Classes cannot implement union types

// class apiRes implements Response {
//     ok: boolean = true;
// }



// ❌ Invalid syntax
// Interface cannot directly become union type like this

// interface Response = {ok:true} | {ok:false};


// class apiRes implements Response {
//     ok: boolean = true;
// }



// ================================
// STRING LITERAL UNION TYPE
// ================================

// Only these chai types are allowed
type TeaType = "masala" | "ginger" | "lemon";


// Function only accepts allowed values
function orderChai(t: TeaType) {
    console.log(t);
}



// ================================
// INTERSECTION TYPES
// ================================

// Base type
type BaseChai = {
    teaLeaves: number
}


// Extra properties type
type Extra = {
    masal: number
}


// Intersection type combines both types
type MasalaChai2 = BaseChai & Extra;


// Object must contain properties from both types
const cup: MasalaChai2 = {
    teaLeaves: 2,
    masal: 1
};



// ================================
// OPTIONAL PROPERTIES
// ================================

// bio? means optional property
type User = {
    username: string;
    bio?: string;
};


// Valid because bio is optional
const u1: User = {
    username: "Prashant"
};


// Also valid
const u2: User = {
    username: "Prashant",
    bio: "Prashant.ai"
};



// ================================
// READONLY PROPERTIES
// ================================

// readonly properties cannot be changed later
type config = {
    readonly appName: string;
    version: number;
};


const cfg: config = {
    appName: "masterJi",
    version: 1
};


// ❌ Error because readonly property cannot change

// cfg.appName = "guruJi";




// ================================
// TYPE VS INTERFACE
// ================================

// TYPE
// - Supports unions
// - Supports intersections
// - More flexible


// INTERFACE
// - Best for object/class structures
// - Mostly used with classes and React
// - Supports extending


// Both are used to make code:
// ✅ safer
// ✅ cleaner
// ✅ scalable
// ✅ easier to understand