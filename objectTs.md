# Objects in TypeScript (In Depth)

In TypeScript, an **object** is a collection of key-value pairs.

Example:

```ts
const user = {
  name: "Prashant",
  age: 22
}
```

Here:

* `name` → key
* `"Prashant"` → value
* `age` → key
* `22` → value

---

# Why Objects Matter in TypeScript

Objects are everywhere in real-world applications:

* User profiles
* API responses
* Product cards
* Form data
* Config settings
* Database records

TypeScript helps us define the **shape** of objects so errors can be caught early.

---

# 1. Basic Object Type

```ts
let user: {
  name: string;
  age: number;
};

user = {
  name: "Prashant",
  age: 22
};
```

## Explanation

```ts
name: string
```

means:

> The `name` property must contain a string.

```ts
age: number
```

means:

> The `age` property must contain a number.

---

# 2. TypeScript Prevents Wrong Data

```ts
let user: {
  name: string;
  age: number;
};

user = {
  name: "Prashant",
  age: "22" // ❌ Error
};
```

TypeScript error because:

```ts
age
```

expects a number, but `"22"` is a string.

---

# 3. Missing Properties

```ts
let user: {
  name: string;
  age: number;
};

user = {
  name: "Prashant"
};
```

❌ Error because `age` is missing.

TypeScript checks the complete structure of the object.

---

# 4. Extra Properties

```ts
let user: {
  name: string;
};

user = {
  name: "Prashant",
  age: 22
};
```

❌ Error because `age` is not defined in the type.

---

# 5. Nested Objects

Objects can contain other objects.

```ts
let user: {
  name: string;
  address: {
    city: string;
    pin: number;
  };
};

user = {
  name: "Prashant",
  address: {
    city: "Muzaffarpur",
    pin: 842001
  }
};
```

---

# 6. Optional Properties (`?`)

Sometimes some data may or may not exist.

```ts
let user: {
  name: string;
  age?: number;
};

user = {
  name: "Prashant"
};
```

Here:

```ts
age?
```

means:

> `age` is optional.

---

# 7. Readonly Properties

Prevent properties from changing.

```ts
let user: {
  readonly id: number;
  name: string;
};

user = {
  id: 1,
  name: "Prashant"
};

user.id = 2; // ❌ Error
```

---

# 8. Object With Functions

Objects can also contain methods (functions).

```ts
let user: {
  name: string;
  greet: () => void;
};

user = {
  name: "Prashant",

  greet: () => {
    console.log("Hello");
  }
};
```

---

# 9. Function Parameters as Objects

Very common in React and APIs.

```ts
function printUser(user: { name: string; age: number }) {
  console.log(user.name);
  console.log(user.age);
}

printUser({
  name: "Prashant",
  age: 22
});
```

---

# 10. Type Alias for Objects

Writing object types repeatedly is bad.

Use `type`.

```ts
type User = {
  name: string;
  age: number;
};

let user1: User = {
  name: "Prashant",
  age: 22
};

let user2: User = {
  name: "Rahul",
  age: 25
};
```

This is the most common approach in real projects.

---

# 11. Interface (Very Important)

Another way to define object shapes.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Prashant",
  age: 22
};
```

---

# Difference Between `type` and `interface`

## Type

```ts
type User = {
  name: string;
};
```

## Interface

```ts
interface User {
  name: string;
}
```

### Main Difference

Interfaces are mainly used for objects and can be extended easily.

---

# 12. Extending Objects

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Prashant",
  role: "Developer"
};
```

---

# 13. Arrays of Objects

Very common in frontend development.

```ts
type Product = {
  id: number;
  title: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Laptop"
  },
  {
    id: 2,
    title: "Phone"
  }
];
```

---

# 14. Dynamic Object Keys

Sometimes keys are unknown.

```ts
let scores: {
  [key: string]: number;
};

scores = {
  math: 90,
  english: 85
};
```

Meaning:

* key → string
* value → number

---

# 15. Real-World API Example

```ts
type ApiResponse = {
  success: boolean;
  data: {
    id: number;
    name: string;
    email: string;
  };
};

const response: ApiResponse = {
  success: true,

  data: {
    id: 1,
    name: "Prashant",
    email: "test@gmail.com"
  }
};
```

---

# 16. Object Destructuring With Types

```ts
type User = {
  name: string;
  age: number;
};

function showUser({ name, age }: User) {
  console.log(name);
  console.log(age);
}
```

---

# 17. Object vs `Object`

## ❌ Avoid This

```ts
let user: Object;
```

Why?

Because `Object` is too broad.

It allows many unwanted values.

---

## ✅ Better

```ts
let user: {
  name: string;
};
```

Always define exact shapes.

---

# 18. Object Type Inference

TypeScript can automatically infer object types.

```ts
const user = {
  name: "Prashant",
  age: 22
};
```

TypeScript understands:

```ts
{
  name: string;
  age: number;
}
```

automatically.

---

# 19. `as const`

Locks object values.

```ts
const user = {
  name: "Prashant",
  role: "admin"
} as const;
```

Now values become readonly.

---

# 20. Real-World React Example

```tsx
type Props = {
  title: string;
  price: number;
};

function Card(props: Props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
    </div>
  );
}
```

Objects are heavily used in:

* React props
* State
* API handling
* Redux
* Context API

---

# Important Interview Questions

## Q1. Difference between `type` and `interface`?

## Q2. What are optional properties?

## Q3. What is readonly?

## Q4. What is index signature?

## Q5. What is nested object typing?

## Q6. Why avoid `Object` type?

---

# Best Practices

✅ Use `type` or `interface`

✅ Keep object structures clean

✅ Use optional properties when needed

✅ Prefer exact object shapes

✅ Use interfaces for scalable apps

---

# Mini Practice

## 1.

Create a `Student` object with:

* name
* class
* rollNumber

---

## 2.

Create an array of `Product` objects.

---

## 3.

Create nested object:

```ts
user -> address -> city
```

---

## 4.

Create object with optional phone number.

---

# Summary

TypeScript objects help you:

* Write safer code
* Catch errors early
* Improve autocomplete
* Make code scalable
* Handle APIs properly
* Build large applications confidently

Objects are one of the MOST important concepts in TypeScript and real-world development.
