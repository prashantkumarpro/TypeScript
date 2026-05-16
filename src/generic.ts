/**
 * GENERICS IN TYPESCRIPT
 * ----------------------
 * Generics help us write reusable and type-safe code.
 *
 * Instead of creating separate functions/types for:
 * string, number, object, array, etc.
 *
 * We create ONE flexible structure using <T>.
 *
 * T = Type Placeholder
 */

/* ======================================================
   1. GENERIC FUNCTION
====================================================== */

/**
 * wrapInArray()
 * -------------
 * Takes any value and returns it inside an array.
 *
 * <T> means:
 * "The type will be decided later when the function is called."
 */
function wrapInArray<T>(item: T): T[] {
    return [item];
}

/**
 * TypeScript automatically infers the type.
 * So:
 * T = string
 */
const chai = wrapInArray("masala");

/**
 * T = number
 */
const price = wrapInArray(42);

/**
 * T = object
 */
const gingerChai = wrapInArray({
    flavor: "ginger"
});

console.log(chai);
console.log(price);
console.log(gingerChai);



/* ======================================================
   2. MULTIPLE GENERICS
====================================================== */

/**
 * pair()
 * -------
 * Creates a tuple with two different values.
 *
 * A = type of first value
 * B = type of second value
 */
function createPair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

/**
 * Different combinations of data types
 */

const pair1 = createPair("masala", "tea");

const pair2 = createPair("masala", 20);

const pair3 = createPair("masala", {
    flavor: "ginger"
});

console.log(pair1);
console.log(pair2);
console.log(pair3);



/* ======================================================
   3. GENERIC INTERFACE
====================================================== */

/**
 * Box<T>
 * -------
 * A reusable interface where the content type
 * can change dynamically.
 */
interface Box<T> {
    content: T;
}

/**
 * Box containing string
 */
const stringBox: Box<string> = {
    content: "This is content"
};

/**
 * Box containing number
 */
const numberBox: Box<number> = {
    content: 25
};

console.log(stringBox);
console.log(numberBox);



/* ======================================================
   4. REAL-WORLD EXAMPLE → API RESPONSE
====================================================== */

/**
 * ApiResponse<T>
 * ----------------
 * This structure is commonly used in:
 * - Frontend apps
 * - Backend APIs
 * - React projects
 * - Data fetching
 *
 * Different APIs return different data,
 * so generics make the response reusable.
 */
interface ApiResponse<T> {
    status: number;
    data: T;
}

/**
 * Example API response
 *
 * Here:
 * T = { flavor: string }
 */
const response: ApiResponse<{ flavor: string }> = {
    status: 200,
    data: {
        flavor: "masala"
    }
};

console.log(response);



/* ======================================================
   5. REAL-WORLD REACT USE CASES
====================================================== */

/**
 * React State Example
 * --------------------
 * Generics are heavily used in React.
 *
 * Example:
 *
 * const [name, setName] = useState<string>("");
 *
 * Here:
 * T = string
 */


/**
 * State Management Libraries
 * ---------------------------
 * Generics are also used in:
 *
 * - Redux Toolkit
 * - React Query
 * - Zustand
 * - Context API
 * - Axios
 * - Express
 * - MongoDB libraries
 */


/* ======================================================
   FINAL NOTES
====================================================== */

/**
 * WHY GENERICS ARE IMPORTANT?
 *
 * ✅ Reusable code
 * ✅ Cleaner code
 * ✅ Scalable applications
 * ✅ Better developer experience
 * ✅ Strong type safety
 * ✅ Professional code architecture
 */


/**
 * MENTAL MODEL
 *
 * <T> means:
 *
 * "I don't know the type yet.
 * The user will decide it later."
 */