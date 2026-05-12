## `union` Type in TypeScript

A **union type** means a variable can hold **more than one type**.

You use the `|` symbol.

### Example

```ts
let value: string | number;

value = "Prashant"; // ✅
value = 100;        // ✅
value = true;       // ❌ Error
```

Here:

* `value` can be a `string`
* OR a `number`
* but not anything else

---

## Why Union Types Are Useful

They make your code **flexible + safe**.

### Real-world Example

Suppose an API returns either:

* user ID as a number
* or `"guest"` as a string

```ts
let userId: number | string;

userId = 101;
userId = "guest";
```

---

## Union with Functions

```ts
function printId(id: string | number) {
  console.log(id);
}

printId(101);
printId("A101");
```

---

## Type Narrowing

When using unions, TypeScript wants you to check the type before using type-specific methods.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Here TypeScript becomes smart after the check.

---

# `any` Type in TypeScript

`any` means:

> “TypeScript, stop checking this variable.”

It disables type safety.

### Example

```ts
let data: any;

data = "hello";
data = 100;
data = true;
data = [];
```

Everything works.

---

## Problem with `any`

TypeScript cannot protect you from mistakes.

```ts
let user: any = "Prashant";

console.log(user.toUpperCase()); // ✅

user = 100;

console.log(user.toUpperCase()); // ❌ Runtime Error
```

TypeScript gives no warning because of `any`.

---

# Union vs Any

| Feature         | Union    | Any             |
| --------------- | -------- | --------------- |
| Type Safety     | ✅ Yes    | ❌ No            |
| Flexible        | ✅ Yes    | ✅ Yes           |
| Error Detection | ✅ Strong | ❌ None          |
| Recommended     | ✅ Yes    | ⚠️ Avoid mostly |

---

# Better Alternative to `any`

Use `unknown` instead of `any` when possible.

```ts
let value: unknown;

value = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

`unknown` is safer because TypeScript forces checks first.

---

# Quick Memory Trick

* `union` → “One of many allowed types”
* `any` → “Disable TypeScript checking”

---

# Practice Questions

### 1.

Create a variable that accepts both boolean and string.

```ts
let status: boolean | string;
```

---

### 2.

Create a function that accepts number or string.

```ts
function show(value: number | string) {
  console.log(value);
}
```

---

### 3.

Try using `any` and intentionally create a runtime error to understand why it’s dangerous.

```ts
let x: any = 10;

console.log(x.toUpperCase());
```

Would you like next:

* `unknown vs any`
* `type aliases`
* `interfaces`
* `literal types`
* or `never` type?
