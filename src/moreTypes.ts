
// ===============================
// TYPE ASSERTION (as)
// ===============================

// `response` is of type `any`
// TypeScript does not know what actual type it contains
let response: any = "108";

// Here we tell TypeScript:
// "Trust me, response is a string"
// So now we can use `.length`
let numericLength: number = (response as string).length;

console.log(numericLength); // 3



// ===============================
// CUSTOM TYPE
// ===============================

// Creating a custom type called Book
type Book = {
    name: string
}

// JSON string
// NOTE:
// JSON should use DOUBLE quotes (")
// Single quotes make invalid JSON
let bookString = '{"name":"who moved my cheese"}';

// JSON.parse converts string into object
// `as Book` tells TypeScript:
// "This parsed object follows Book structure"
let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj.name);



// ===============================
// TYPE ASSERTION WITH DOM
// ===============================

// getElementById returns:
// HTMLElement | null
//
// TypeScript does not know whether it is
// an input element, button, div, etc.
//
// So we assert it as HTMLInputElement
let userName = document.getElementById("username") as HTMLInputElement;

// Now TypeScript allows input-specific properties
console.log(userName.value);



// ===============================
// ANY TYPE
// ===============================

// `any` disables TypeScript checking
// It can hold ANY value
let value: any;

value = "Get job";
value = [100, 110, 111];
value = 13.4;

// No TypeScript error
// But runtime may crash because 13.4
// does not have toUpperCase()
value.toUpperCase();



// ===============================
// UNKNOWN TYPE
// ===============================

// `unknown` is safer than `any`
// You must check the type before using it
let newValue: unknown;

newValue = "Get job";
newValue = [100, 110, 111];
newValue = 13.4;

// ❌ Error
// TypeScript does not allow direct usage
// newValue.toUpperCase()



// ===============================
// TYPE NARROWING
// ===============================

// We check the type first
if (typeof newValue === "string") {

    // Inside this block TypeScript knows
    // newValue is a string
    console.log(newValue.toUpperCase());
}



// ===============================
// ERROR HANDLING
// ===============================

// `catch(error)` is treated as unknown
// because errors can be anything

try {

    // risky code

} catch (error) {

    // Check if error is instance of Error class
    if (error instanceof Error) {

        // Safe access
        console.log(error.message);
    }

    console.log("Error:", error);
}



// ===============================
// UNKNOWN + TYPE ASSERTION
// ===============================

// unknown value
const data: unknown = "Get job quickly";

// We assert it as string
const strData: string = data as string;

console.log(strData.toUpperCase());



// ===============================
// LITERAL TYPES
// ===============================

// Role can ONLY be:
// "admin" or "user"
type Role = "admin" | "user";

// If you add:
// "superadmin"
// then it becomes valid too

function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
    }

    // This line is unreachable
    // because role can only be
    // "admin" or "user"
    role;
}



// ===============================
// NEVER TYPE
// ===============================

// `never` means:
// this function NEVER finishes

function neverReturn(): never {

    // Infinite loop
    while (true) {

    }
}

// Another example of never
function throwError(message: string): never {
    throw new Error(message);
}

