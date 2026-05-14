In TypeScript, an **interface** is used to define the **shape of an object**.

It tells TypeScript:

> “This object should contain these properties and methods.”

It helps make code:

* safer
* cleaner
* easier to understand
* scalable in large projects

---

# Basic Syntax

```ts
interface User {
  name: string;
  age: number;
}
```

Now any object of type `User` must follow this structure.

```ts
const user1: User = {
  name: "Prashant",
  age: 22
};
```

✅ Correct

---

# Wrong Example

```ts
const user2: User = {
  name: "Prashant"
};
```

❌ Error because `age` is missing.

---

# Real-World Example

Imagine you are building a student management system.

```ts
interface Student {
  name: string;
  rollNo: number;
  isPresent: boolean;
}
```

```ts
const student1: Student = {
  name: "Rahul",
  rollNo: 12,
  isPresent: true
};
```

This makes your data structure consistent everywhere.

---

# Optional Properties (`?`)

Sometimes some data may or may not exist.

```ts
interface Employee {
  name: string;
  company?: string;
}
```

```ts
const emp1: Employee = {
  name: "Aman"
};
```

✅ Valid because `company` is optional.

---

# Readonly Properties

```ts
interface Product {
  readonly id: number;
  name: string;
}
```

```ts
const item: Product = {
  id: 101,
  name: "Laptop"
};

item.name = "Gaming Laptop"; // ✅
item.id = 202; // ❌ Error
```

---

# Interface with Functions

```ts
interface Add {
  (a: number, b: number): number;
}

const sum: Add = (x, y) => x + y;
```

---

# Interface with Methods

```ts
interface Person {
  name: string;
  greet(): void;
}

const user: Person = {
  name: "Prashant",

  greet() {
    console.log("Hello");
  }
};
```

---

# Extending Interfaces

One interface can inherit another.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

```ts
const dog1: Dog = {
  name: "Tommy",
  breed: "German Shepherd"
};
```

---

# Interface vs Type Alias

## Interface

```ts
interface User {
  name: string;
}
```

## Type

```ts
type User = {
  name: string;
};
```

Both are similar in many cases.

---

# Main Difference

Interfaces can be merged automatically.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

Now:

```ts
const user: User = {
  name: "Prashant",
  age: 22
};
```

✅ TypeScript combines both interfaces.

Type aliases cannot do this.

---

# When to Use Interface

Use interfaces for:

* object structures
* API responses
* React props
* class contracts
* large applications

---

# Interface in React Example

```tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
```

---

# Why Interfaces Are Powerful

They help:

* catch errors early
* improve autocomplete
* improve readability
* make teamwork easier
* scale projects safely

---

# Quick Summary

| Feature               | Interface |
| --------------------- | --------- |
| Defines object shape  | ✅         |
| Supports functions    | ✅         |
| Supports methods      | ✅         |
| Supports inheritance  | ✅         |
| Optional properties   | ✅         |
| Readonly properties   | ✅         |
| Used heavily in React | ✅         |

---

# Most Important Thing to Remember

An interface is like a **blueprint**.

Just like a building blueprint defines:

* rooms
* doors
* windows

An interface defines:

* properties
* types
* methods

for objects in TypeScript.
