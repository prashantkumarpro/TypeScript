// Function to make chai
// Parameters:
// type -> type of chai (Masala, Ginger, etc.)
// cups -> number of cups
function makeChai(type: string, cups: number) {

    // Printing chai making message
    console.log(`Makjing ${cups} cups of ${type}`);
}

// Calling the function
makeChai("Masala", 2)


// Function that returns chai price
// Return type is number
function getChaiPrice(): number {

    // Returning chai price
    return 25
}


// Function to make order
// order parameter is string
function makeOrder(order: string) {

    // If order is empty, return null
    if (!order) return null

    // Otherwise return the order
    return order
}


// Function with void return type
// void means this function does not return anything
function logChai(): void {

    // Printing message
    console.log("Chai is ready!");
}


// Optional parameter example
// type? means parameter is optional

// function orderChai(type?:string){
//     console.log();   
// }


// Function with default parameter
// If user does not pass anything,
// "Masala" will be used automatically
function orderChai(type: string = "Masala") {

}


// Function with object parameter
function createChai(order: {

    // Chai type must be string
    type: string;

    // Sugar quantity must be number
    suger: number;

    // size can only be "small" or "large"
    size: "small" | "large"

}): number {

    // Returning total cups/orders count
    return 4
}