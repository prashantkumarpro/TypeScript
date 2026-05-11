You mean **Type Annotation** and **Type Inference** in TypeScript.
(“typeinotation” → Type Annotation, “typeinfrance” → Type Inference)

These are very important TypeScript concepts.

---

# 1. Type Annotation

Type Annotation means:

👉 You manually tell TypeScript what the type is.

Syntax:

```ts
let userName: string = "Prashant";
```

Here:

* `userName` → variable name
* `: string` → type annotation
* `"Prashant"` → value

You explicitly said:

> “This variable must be a string.”

---

## Example

```ts
let age: number = 21;

let isStudent: boolean = true;
```

---

## Function Example

```ts
function greet(name: string): string {
    return `Hello ${name}`;
}
```

Here:

* `name: string` → parameter annotation
* `: string` after `)` → return type annotation

---

# 2. Type Inference

Type Inference means:

👉 TypeScript automatically guesses the type.

Example:

```ts
let city = "Delhi";
```

TypeScript automatically understands:

```ts
let city: string = "Delhi";
```

You did NOT write the type manually.

This is called **type inference**.

---

## More Examples

```ts
let price = 100;
```

TypeScript infers:

```ts
let price: number
```

---

```ts
let isOnline = false;
```

TypeScript infers:

```ts
let isOnline: boolean
```

---

# Difference Between Them

| Feature              | Type Annotation        | Type Inference |
| -------------------- | ---------------------- | -------------- |
| Who defines type?    | Developer              | TypeScript     |
| Manual or automatic? | Manual                 | Automatic      |
| Example              | `let age: number = 20` | `let age = 20` |

---

# Real World Understanding

Imagine a school teacher.

## Type Annotation

You tell the teacher:

> “My favorite subject is Math.”

You manually specify it.

---

## Type Inference

Teacher sees you solving only math problems and guesses:

> “He likes Math.”

Teacher inferred it automatically.

---

# When To Use Annotation?

Use Type Annotation when:

* Function parameters
* API data
* Objects
* Arrays
* Complex code
* Team projects

Example:

```ts
const user: {
    name: string;
    age: number;
} = {
    name: "Prashant",
    age: 21
};
```

---

# When To Use Inference?

Use inference for simple variables.

```ts
let score = 99;
```

No need to write:

```ts
let score: number = 99;
```

because TypeScript already knows.

---

# Important Interview Point

TypeScript is smart enough to infer simple types, but annotations improve readability and safety in bigger applications like React apps and backend projects.

---

# Practice Questions

## Type Annotation Practice

```ts
let country: string = "India";

let marks: number = 95;

let passed: boolean = true;
```

---

## Type Inference Practice

```ts
let language = "TypeScript";

let total = 500;

let isLoggedIn = false;
```

Try to guess the inferred type.

---

# Mini Challenge

What types are inferred here?

```ts
let username = "Rahul";
let age = 25;
let isAdmin = true;
```

Answer:

```ts
username -> string
age -> number
isAdmin -> boolean
```

---

# Golden Rule

✅ Simple variable → use inference
✅ Complex data/functions → use annotation

This is how professional TypeScript developers work.
