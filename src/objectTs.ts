// Simple JavaScript object
const chai = {
    name: "masal chai", // string value
    price: 20,          // number value
    isHost : true       // boolean value
}

// TypeScript automatically infers the type like this:

// {
//     name:string;
//     price:number;
//     isHot:boolean
// }



// Explicit object typing
// Here we are telling TypeScript exactly
// what properties this object should have

let tea: {
    name:string;
    price:number;
    isHot : boolean
}

// Assigning values to the object
tea = {
    name : "Ginger Tea",
    price : 25,
    isHot : true
}



// Creating reusable object type using type alias
type Tea  = {
    name:string;
    price:number;
    ingredients:string[]
}



// Using the Tea type
const adrakChai :Tea = {
    name : "Adrak Chai",
    price : 29,

    // Array of strings
    ingredients : ["ginger", "tea leaves"]
}



// Another small object type
type Cup = {
    size:string
};

// Object following Cup type
let smallCup : Cup = {
    size : "200ml"
}



// This object has EXTRA properties
let bigCup = {
    size: "500ml",
    material : "steel"
};



// Allowed because TypeScript checks structure
// bigCup contains at least the required property: size
smallCup = bigCup



// -------------------------------
// Duck Typing / Structural Typing
// -------------------------------

// If two objects have the same structure,
// TypeScript considers them compatible



type Brew = {
    brewTime:number
};

// coffee object has extra property: beans
const coffee= {
    brewTime: 5,
    beans: "Arabica"
};



// Allowed because brewTime exists
const chaiBrew : Brew = coffee



// User object type
type User = {
    username:string;
    password: string
}



// ❌ Error example
// password is missing

// const u: User = {
//     username : "PK"
// }



// ✅ Correct object
const u: User = {
    username : "PK",
    password : "123"
}



// -------------------------------
// Nested Object Types
// -------------------------------



// Single item type
type Item =  {
    name:string,
    quantity: number
};



// Address type
type Address = {
    street:string,
    pin : number
};



// Order type using nested objects
type Order = {
    id: string;

    // Array of Item objects
    items : Item[];

    // Nested Address object
    address : Address
}



// -------------------------------
// Utility Types
// -------------------------------



// Base Chai type
type Chai = {
    name: string;
    price : number;
    isHot : boolean
}



// Partial<T>
// Makes ALL properties optional

const updateChai = (updates:Partial<Chai>)=>{

    console.log("updating Chai With", updates);

}



// We can update only one property
updateChai({price:25})



// Or another property
updateChai({isHot:false})



// Even empty object works
updateChai({})



// -------------------------------
// Required<T>
// Makes ALL optional properties required
// -------------------------------



type ChaiOrder = {

    // Optional properties
    name?:string;
    quantity?:number
}



// Required converts all optional properties into required
const placeOrder = (order:Required<ChaiOrder>)=>{

    console.log(order);

}



// Must provide all properties
placeOrder({
    name : "Masal Chai",
    quantity : 2
})



// -------------------------------
// Pick<T, Keys>
// Select only specific properties
// -------------------------------



type Chai2= {
    name : string;
    price:number;
    isHot : boolean;
    ingredients : string[]
}



// Pick only name and price
type BasicChaiInfo = Pick<Chai2, "name" | "price">;



// Object using picked properties only
const chaiInfo : BasicChaiInfo = {

    name : "Lemon Tea",
    price : 30
}



// -------------------------------
// Omit<T, Keys>
// Remove specific properties
// -------------------------------



type ChaiNew= {
    name : string;
    price:number;
    isHot : boolean;

    // Secret property
    secretIngredients : string
}



// Remove secretIngredients property
type PublicChai = Omit<ChaiNew, "secretIngredients">;



// PublicChai will become:

// {
//   name:string;
//   price:number;
//   isHot:boolean
// }