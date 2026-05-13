# TypeScript More Types

This file explains some important TypeScript concepts:

- Type Assertion
- any
- unknown
- Type Narrowing
- Error Handling
- Literal Types
- never Type

---

# 1. Type Assertion

## What is Type Assertion?

Type Assertion means:

> "Telling TypeScript what the type of a value is."

Sometimes TypeScript cannot understand the exact type.
In that case, we manually tell TypeScript the type using `as`.

Syntax:

```ts
value as Type
```

Example:

```ts
let response: any = "108";

let numericLength: number = (response as string).length;

console.log(numericLength);
```

Output:

```bash
3
```

Here:

- `response` is `any`
- TypeScript does not know it is a string
- We tell TypeScript:
  `"Treat response as a string"`

So now `.length` works.

---

# Real Use Cases of Type Assertion

## 1. Working with DOM Elements

TypeScript does not know which HTML element is returned.

Example:

```ts
let userName = document.getElementById("username") as HTMLInputElement;

console.log(userName.value);
```

Why?

Because `getElementById()` can return:

- div
- button
- input
- null

We tell TypeScript:

> "This is an input element."

Then we can use `.value`.

---

## 2. API Data

Sometimes API data type is unclear.

Example:

```ts
type User = {
    name: string
}

const apiData = {
    name: "Prashant"
} as User;

console.log(apiData.name);
```

---

## 3. JSON.parse()

`JSON.parse()` returns `any`.

Example:

```ts
type Book = {
    name: string
}

let bookString = '{"name":"who moved my cheese"}';

let bookObj = JSON.parse(bookString) as Book;

console.log(bookObj.name);
```

---

# 2. any Type

`any` disables TypeScript checking.

Example:

```ts
let value: any;

value = "Get job";
value = [100, 110, 111];
value = 13.4;

value.toUpperCase();
```

Problem:

TypeScript allows everything.

But runtime may crash because numbers do not have `.toUpperCase()`.

Use `any` carefully.

---

# 3. unknown Type

`unknown` is safer than `any`.

You must check the type before using it.

Example:

```ts
let newValue: unknown;

newValue = "Get job";
newValue = [100, 110, 111];
newValue = 13.4;

// Error
// newValue.toUpperCase()
```

TypeScript blocks unsafe operations.

---

# 4. Type Narrowing

Type Narrowing means:

> Reducing a broad type into a specific type.

Example:

```ts
if (typeof newValue === "string") {
    console.log(newValue.toUpperCase());
}
```

Now TypeScript knows:

```ts
newValue is string
```

So `.toUpperCase()` works safely.

---

# 5. Error Handling

In TypeScript:

```ts
catch(error)
```

is treated as `unknown`.

Example:

```ts
try {

} catch (error) {

    if (error instanceof Error) {
        console.log(error.message);
    }

    console.log("Error:", error);
}
```

Why use `instanceof Error`?

Because errors can be:

- string
- object
- number
- Error object

So we check first.

---

# 6. unknown + Assertion

Example:

```ts
const data: unknown = "Get job quickly";

const strData: string = data as string;

console.log(strData.toUpperCase());
```

We tell TypeScript:

> "data is a string"

---

# 7. Literal Types

Literal Types allow fixed values only.

Example:

```ts
type Role = "admin" | "user";
```

Now role can only be:

- `"admin"`
- `"user"`

Example:

```ts
function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
    }
}
```

Benefits:

- Better safety
- Prevent invalid values
- Great for authentication systems

---

# 8. never Type

`never` means:

> This function never finishes.

Example:

```ts
function neverReturn(): never {

    while (true) {

    }
}
```

Another example:

```ts
function throwError(message: string): never {
    throw new Error(message);
}
```

Why?

Because:

- infinite loop never ends
- thrown error stops execution

---

# Difference Between any and unknown

| any | unknown |
|---|---|
| Unsafe | Safe |
| Allows everything | Requires type checking |
| No TypeScript protection | Better protection |

Example:

```ts
let a: any = "Hello";
a.toUpperCase(); // Allowed

let b: unknown = "Hello";

// Error
// b.toUpperCase()
```

---

# Important Interview Questions

## Q1. What is Type Assertion?

Type Assertion tells TypeScript the exact type of a value using `as`.

Example:

```ts
value as string
```

---

## Q2. Difference Between any and unknown?

- `any` removes type safety
- `unknown` keeps safety and requires checking

---

## Q3. What is Type Narrowing?

Type Narrowing means checking a type before using it.

Example:

```ts
typeof
instanceof
in
```

---

# Final Notes

## Use `any` when:

- You truly don't know the type
- Migrating old JavaScript code

## Use `unknown` when:

- Data comes from API
- User input
- External sources

## Use Assertion when:

- TypeScript cannot detect the correct type
- DOM handling
- JSON parsing
- API response handling