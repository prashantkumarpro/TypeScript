# Functions in TypeScript (In Depth)

A **function** is a reusable block of code that performs a specific task.

In TypeScript, functions are more powerful because we can define:

* parameter types
* return types
* optional parameters
* default parameters
* rest parameters
* function types
* callbacks
* overloads
* generics

---

# 1. Basic Function

JavaScript function:

```js
function add(a, b) {
  return a + b;
}
```

Problem:

* No type safety
* Can pass anything

```js
add(10, "20") // "1020"
```

---

# TypeScript Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Explanation:

| Part        | Meaning        |
| ----------- | -------------- |
| `a: number` | parameter type |
| `b: number` | parameter type |
| `: number`  | return type    |

---

## Example

```ts
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 3));
```

Output:

```bash
6
```

---

# How TypeScript Protects Us

```ts
multiply(2, "3")
```

Error:

```bash
Argument of type 'string' is not assignable to parameter of type 'number'
```

This helps avoid bugs before running the program.

---

# Real World Analogy

Think of a function like a **juice machine**.

* Inputs = fruits
* Processing = blending
* Output = juice

TypeScript checks:

* what fruits are allowed
* what juice will come out

---

# 2. Function Return Type

## Explicit Return Type

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

Here:

* input → string
* output → string

---

## Type Inference

TypeScript can automatically detect return type.

```ts
function square(num: number) {
  return num * num;
}
```

TypeScript infers:

```ts
(num: number) => number
```

---

# Why Explicit Return Type is Good

Large applications become easier to maintain.

Example:

```ts
function login(username: string, password: string): boolean {
  return true;
}
```

Now everyone knows this function returns a boolean.

---

# 3. Void Function

Sometimes functions do not return anything.

Example:

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

`void` means:

> "This function returns nothing."

---

## Example

```ts
function welcome(): void {
  console.log("Welcome");
}
```

---

# 4. Optional Parameters

Sometimes parameters are not required.

Use `?`

```ts
function greetUser(name: string, age?: number) {
  console.log(name, age);
}
```

Usage:

```ts
greetUser("Prashant");
greetUser("Prashant", 22);
```

---

## Important Rule

Optional parameters should come after required parameters.

❌ Wrong:

```ts
function test(a?: number, b: string) {}
```

✅ Correct:

```ts
function test(b: string, a?: number) {}
```

---

# 5. Default Parameters

We can give default values.

```ts
function greet(name: string = "Guest") {
  console.log(`Hello ${name}`);
}
```

Usage:

```ts
greet(); // Hello Guest
greet("Prashant");
```

---

# Difference Between Optional and Default

| Optional         | Default            |
| ---------------- | ------------------ |
| May be undefined | Gets default value |
| `age?: number`   | `age: number = 18` |

---

# 6. Rest Parameters

Used when we don't know how many arguments will come.

```ts
function total(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

Usage:

```ts
total(1, 2, 3);
total(10, 20, 30, 40);
```

---

# Explanation

```ts
...numbers
```

means:

> collect all arguments into an array

Type:

```ts
number[]
```

---

# 7. Arrow Functions

## Normal Function

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Arrow Function

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

Short version:

```ts
const add = (a: number, b: number): number => a + b;
```

---

# Why Arrow Functions are Popular

* cleaner syntax
* commonly used in React
* lexical `this`

---

# 8. Function Type

Functions can also have types.

```ts
let myFunc: (a: number, b: number) => number;
```

Meaning:

```ts
(a:number,b:number)=>number
```

---

## Example

```ts
myFunc = function(a, b) {
  return a + b;
}
```

OR

```ts
myFunc = (a, b) => a + b;
```

---

# Real World Use Case

Very useful in:

* callbacks
* React props
* APIs
* event handlers

---

# 9. Callback Functions

A function passed into another function.

```ts
function processUser(
  name: string,
  callback: (message: string) => void
) {
  callback(`Welcome ${name}`);
}
```

Usage:

```ts
processUser("Prashant", (msg) => {
  console.log(msg);
});
```

---

# Real World Example

Used everywhere:

* `setTimeout`
* `map`
* `filter`
* React event handlers

---

# 10. Function Overloading

Allows multiple function signatures.

Example:

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any) {
  return a + b;
}
```

Usage:

```ts
combine(1, 2);
combine("Hello ", "World");
```

---

# Why Use Overloading?

When function behaves differently for different types.

Example:

* search function
* API handler
* utility libraries

---

# 11. Never Type

Used when function never finishes.

Example:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

OR

```ts
function infiniteLoop(): never {
  while(true) {}
}
```

---

# Difference Between Void and Never

| void               | never                   |
| ------------------ | ----------------------- |
| returns nothing    | never completes         |
| finishes execution | execution stops forever |

---

# 12. Function with Object Parameter

Very common in real-world apps.

```ts
function createUser(user: {
  name: string;
  age: number;
}) {
  console.log(user.name);
}
```

Usage:

```ts
createUser({
  name: "Prashant",
  age: 22
});
```

---

# Better Approach Using Type Alias

```ts
type User = {
  name: string;
  age: number;
};

function createUser(user: User) {
  console.log(user.name);
}
```

---

# 13. Function with Array Parameter

```ts
function printNumbers(numbers: number[]): void {
  console.log(numbers);
}
```

Usage:

```ts
printNumbers([1, 2, 3]);
```

---

# 14. Destructuring in Functions

```ts
type Product = {
  title: string;
  price: number;
};

function showProduct({ title, price }: Product) {
  console.log(title, price);
}
```

---

# 15. Generic Functions

One of the MOST IMPORTANT concepts.

Without generic:

```ts
function identity(value: any): any {
  return value;
}
```

Problem:

* loses type safety

---

## Generic Version

```ts
function identity<T>(value: T): T {
  return value;
}
```

Usage:

```ts
identity<string>("Hello");
identity<number>(10);
```

---

# How Generics Work

`T` means:

> placeholder type

TypeScript replaces it dynamically.

---

# Real World Example

Arrays internally use generics:

```ts
const nums: Array<number> = [1, 2, 3];
```

---

# 16. Async Functions

Used for APIs/database operations.

```ts
async function fetchData(): Promise<string> {
  return "Data fetched";
}
```

---

# Explanation

Async functions always return:

```ts
Promise<something>
```

---

# Example

```ts
async function getUser(): Promise<{name:string}> {
  return {
    name: "Prashant"
  };
}
```

---

# 17. Higher Order Functions

A function that:

* takes another function
  OR
* returns another function

Example:

```ts
function calculator(
  a: number,
  b: number,
  operation: (x:number, y:number)=>number
) {
  return operation(a, b);
}
```

Usage:

```ts
calculator(2, 3, (x, y) => x + y);
```

---

# 18. Function Signature

A function's:

* parameter types
* return type

Example:

```ts
(a: number, b: number) => number
```

This is called function signature.

---

# 19. Real World Example (React)

```tsx
type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click</button>;
}
```

Functions are heavily used in React props.

---

# 20. Best Practices

## ✅ Use Explicit Return Types

```ts
function login(): boolean {}
```

---

## ✅ Avoid `any`

❌

```ts
function test(data:any){}
```

✅

```ts
function test(data:string){}
```

---

## ✅ Use Type Alias

```ts
type User = {
  name:string
}
```

---

## ✅ Use Generics Instead of Any

❌

```ts
function identity(value:any):any{}
```

✅

```ts
function identity<T>(value:T):T{}
```

---

# Interview Questions

## Q1: Difference between void and never?

* `void` → returns nothing
* `never` → never completes

---

## Q2: What is function overloading?

Multiple function signatures for same function.

---

## Q3: Why use generics?

To create reusable and type-safe code.

---

## Q4: Difference between optional and default parameters?

Optional may be undefined, default has predefined value.

---

# Final Summary

Functions in TypeScript provide:

* type safety
* better readability
* autocompletion
* maintainability
* reusable logic
* fewer runtime bugs

Most important concepts:

1. Parameter Types
2. Return Types
3. Optional Parameters
4. Rest Parameters
5. Arrow Functions
6. Callback Functions
7. Function Types
8. Generics
9. Async Functions
10. Function Overloading

These are heavily used in:

* React
* Node.js
* APIs
* Express
* Next.js
* Full Stack Development
