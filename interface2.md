In TypeScript, an **interface** is used to define the **shape of an object**.

It helps TypeScript understand:

* what properties an object should have
* what types those properties should be
* what functions an object should contain

Think of it like a **blueprint** for objects.

---

# Basic Interface Example

```ts
// Creating an interface
interface Tea {
    name: string;
    price: number;
    isHot: boolean;
}

// Creating an object using the interface
const chai: Tea = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};

console.log(chai);
```

---

# Explanation

```ts
interface Tea
```

We are creating a blueprint named `Tea`.

---

```ts
name: string;
```

The object must contain a `name` property and its value must be a string.

---

```ts
price: number;
```

The object must contain a `price` property and its value must be a number.

---

```ts
isHot: boolean;
```

The object must contain an `isHot` property and its value must be either `true` or `false`.

---

# Why Use Interfaces?

Interfaces make code:

* cleaner
* safer
* easier to understand
* easier to scale in big projects

---

# Real-World Example

Imagine building a food delivery app.

Every restaurant item should have:

* name
* price
* rating

Instead of writing types again and again, we create one interface.

```ts
interface FoodItem {
    name: string;
    price: number;
    rating: number;
}

const burger: FoodItem = {
    name: "Veg Burger",
    price: 120,
    rating: 4.5
};

const pizza: FoodItem = {
    name: "Cheese Pizza",
    price: 250,
    rating: 4.8
};
```

---

# Optional Properties (`?`)

Sometimes some properties are not required.

```ts
interface User {
    name: string;
    age?: number;
}
```

`age?` means:

* age is optional
* object can exist without it

Example:

```ts
const user1: User = {
    name: "Prashant"
};

const user2: User = {
    name: "Rahul",
    age: 22
};
```

---

# Readonly Properties

Used when a value should never change.

```ts
interface Student {
    readonly id: number;
    name: string;
}

const student: Student = {
    id: 1,
    name: "Prashant"
};

// ❌ Error
student.id = 2;
```

---

# Interface with Functions

Interfaces can also define function structure.

```ts
interface Add {
    (a: number, b: number): number;
}

const sum: Add = (x, y) => {
    return x + y;
};

console.log(sum(2, 3));
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
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
```

---

# Interface with Arrays

```ts
interface Numbers {
    [index: number]: number;
}

const nums: Numbers = [10, 20, 30];
```

---

# Extending Interfaces

One interface can inherit another interface.

```ts
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Tommy",
    breed: "Labrador"
};
```

---

# Interface vs Type

Both are very similar.

```ts
interface User {
    name: string;
}
```

```ts
type User = {
    name: string;
}
```

But interfaces are mainly used for:

* object structures
* large applications
* OOP patterns
* extending classes/interfaces

---

# Most Important Interview Point

## Interface → Object Blueprint

Whenever you want to define:

* object structure
* API response structure
* class structure
* props in React

You will often use interfaces.

---

# Real React Example

```tsx
interface ButtonProps {
    title: string;
    disabled: boolean;
}

function Button({ title, disabled }: ButtonProps) {
    return (
        <button disabled={disabled}>
            {title}
        </button>
    );
}
```

This is very common in React + TypeScript projects.

---

# Simple Memory Trick

👉 `interface = structure of an object`

OR

👉 `interface = contract/blueprint`

---

# Small Practice Task

Create an interface for:

* Movie
* Product
* Student

Then create objects using them.

Example:

```ts
interface Movie {
    title: string;
    rating: number;
    releaseYear: number;
}
```

This is how you become strong in TypeScript — by practicing small structures repeatedly.
