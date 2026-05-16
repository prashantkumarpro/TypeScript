In TypeScript, **Generics** allow you to write **reusable and flexible code** that works with different data types while still keeping type safety.

Think of generics like a **placeholder for a type**.

---

# Why Generics?

Without generics, you may repeat code for different data types.

Example without generics:

```ts
function returnNumber(value: number): number {
    return value;
}

function returnString(value: string): string {
    return value;
}
```

Problem:

* Repeated code
* Hard to scale

Generics solve this.

---

# Basic Generic Syntax

```ts
function identity<T>(value: T): T {
    return value;
}
```

Here:

* `T` = Type placeholder
* `value: T` = parameter type
* `: T` = return type

You can pass any type.

---

# Example

```ts
function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(10);
const str = identity<string>("Hello");

console.log(num);
console.log(str);
```

Output:

```ts
10
Hello
```

---

# Easy Real-World Example

Imagine a tea shop ☕

Different customers order different chai:

* one orders `"Masala Chai"`
* another orders `25`
* another orders `{ flavor: "Ginger" }`

Instead of creating separate functions, generics handle all.

```ts
function serveChai<T>(chai: T): T {
    return chai;
}

const order1 = serveChai<string>("Masala Chai");
const order2 = serveChai<number>(25);
const order3 = serveChai<{ flavor: string }>({
    flavor: "Ginger"
});

console.log(order1);
console.log(order2);
console.log(order3);
```

---

# Generic with Arrays

```ts
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["A", "B", "C"]);

console.log(firstNumber);
console.log(firstString);
```

---

# Generic Type Inference

Most of the time, TypeScript automatically understands the type.

So you can write:

```ts
function identity<T>(value: T): T {
    return value;
}

const result = identity("Hello");
```

TypeScript automatically knows:

```ts
T = string
```

---

# Multiple Generics

You can use more than one generic type.

```ts
function pair<K, V>(key: K, value: V) {
    return { key, value };
}

const data = pair<string, number>("price", 20);

console.log(data);
```

Output:

```ts
{
  key: "price",
  value: 20
}
```

---

# Generic Interface

```ts
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Chai"
};
```

---

# Generic Type Alias

```ts
type ApiResponse<T> = {
    success: boolean;
    data: T;
};

const userResponse: ApiResponse<string> = {
    success: true,
    data: "Prashant"
};
```

---

# Generic Class

```ts
class StorageBox<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

const box = new StorageBox<string>("Masala Chai");

console.log(box.getContent());
```

---

# Generic Constraints

Sometimes you want generics, but with rules.

Example:
Only allow objects with `length`.

```ts
function printLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

printLength("Hello");
printLength([1, 2, 3]);
```

This works because:

* strings have `length`
* arrays have `length`

But this fails:

```ts
printLength(10);
```

Because number has no `length`.

---

# Real-World Use of Generics

Generics are heavily used in:

* React (`useState<string>()`)
* APIs
* Reusable components
* Data fetching
* Utility functions
* Libraries
* Backend development

Example in React:

```tsx
const [name, setName] = useState<string>("");
```

---

# Most Important Thing to Understand

Generics help you create:

✅ reusable code
✅ scalable code
✅ type-safe code
✅ cleaner code
✅ professional code

---

# Mental Model

Think like this:

```ts
<T>
```

means:

> "I don't know the type yet.
> The user of the function will decide it later."

---

# Interview Definition

> Generics in TypeScript allow us to create reusable components that work with multiple data types while maintaining type safety.

---

# One Small Practice Challenge

Create a generic function:

```ts
function wrapValue<T>(value: T): T[] {
   // return value inside array
}
```

Expected:

```ts
wrapValue(5) // [5]
wrapValue("chai") // ["chai"]
```
