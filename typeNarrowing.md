Type Narrowing in TypeScript means:

> TypeScript reduces a broad type into a more specific type based on conditions.

It helps TypeScript understand the exact type of a variable at runtime.

---

# Example Without Narrowing

```ts
function print(value: string | number) {
  console.log(value.toUpperCase())
}
```

❌ Error:
Because `value` can also be a `number`, and numbers don't have `.toUpperCase()`.

---

# Type Narrowing Example

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed(2))
  }
}
```

Here TypeScript narrows:

* `"string"` → inside `if`
* `"number"` → inside `else`

---

# Common Ways to Narrow Types

## 1. `typeof` Narrowing

Used for primitive types.

```ts
function check(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase())
  } else {
    console.log("Number:", value.toFixed(2))
  }
}
```

---

## 2. `instanceof` Narrowing

Used with classes/objects.

```ts
class Dog {
  bark() {
    console.log("Woof")
  }
}

class Cat {
  meow() {
    console.log("Meow")
  }
}

function sound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark()
  } else {
    animal.meow()
  }
}
```

---

## 3. `in` Operator Narrowing

Checks if a property exists.

```ts
type Admin = {
  name: string
  role: string
}

type User = {
  name: string
  email: string
}

function info(person: Admin | User) {
  if ("role" in person) {
    console.log(person.role)
  } else {
    console.log(person.email)
  }
}
```

---

# Real React Example

```ts
type Props = {
  value: string | number
}

function Display({ value }: Props) {
  return (
    <div>
      {typeof value === "string"
        ? value.toUpperCase()
        : value.toFixed(2)}
    </div>
  )
}
```

This is very common in React + TypeScript projects.

---

# Why Type Narrowing is Powerful

✅ Prevents runtime errors
✅ Gives better autocomplete
✅ Makes code safer
✅ Helps TypeScript understand your logic

---

# Mental Model

Think like this:

```ts
string | number
```

⬇ Condition check

```ts
typeof value === "string"
```

⬇ TypeScript now knows:

```ts
value is string
```

---

# Practice Challenge

Try this:

```ts
function process(value: string | boolean) {

}
```

Task:

* If string → print uppercase
* If boolean → print `"YES"` or `"NO"`

---

# One Important Interview Line

> Type narrowing is the process of refining a broader type into a more specific type using checks like `typeof`, `instanceof`, or `in`.


`unknown` in TypeScript is a **safe version of `any`**.

It means:

> “I don’t know the type yet.”

But unlike `any`, you **must narrow the type before using it**.

---

# Example of `unknown`

```ts id="ccgf6v"
let value: unknown = "Hello"
```

TypeScript knows nothing about `value`.

So this will give an error:

```ts id="mjlwm6"
let value: unknown = "Hello"

console.log(value.toUpperCase())
```

❌ Error:
Because TypeScript says:

> “First prove that it's a string.”

---

# Using Type Narrowing with `unknown`

```ts id="vafjtt"
let value: unknown = "Hello"

if (typeof value === "string") {
  console.log(value.toUpperCase())
}
```

✅ Now it works.

Why?

Because `typeof` narrowed `unknown` → `string`.

---

# `any` vs `unknown`

| Feature                     | `any`           | `unknown` |
| --------------------------- | --------------- | --------- |
| Type safety                 | ❌ No            | ✅ Yes     |
| Can access methods directly | ✅ Yes           | ❌ No      |
| Requires narrowing          | ❌ No            | ✅ Yes     |
| Recommended                 | ❌ Usually avoid | ✅ Better  |

---

# Dangerous Example with `any`

```ts id="4c2ylz"
let value: any = 10

console.log(value.toUpperCase())
```

TypeScript allows it ❌
But runtime crashes because number has no `toUpperCase()`.

---

# Safe Example with `unknown`

```ts id="vl6d4k"
let value: unknown = 10

if (typeof value === "string") {
  console.log(value.toUpperCase())
}
```

✅ Safe.

---

# Real-World Example (API Data)

When data comes from an API, we often don't know its type initially.

```ts id="p8y0zu"
function handleData(data: unknown) {
  if (typeof data === "string") {
    console.log(data.toUpperCase())
  }

  if (typeof data === "number") {
    console.log(data.toFixed(2))
  }
}
```

---

# Mental Model

Think like this:

```ts id="dwk73m"
unknown
```

means:

> “Stop. Check the type first.”

---

# Interview Line

> `unknown` is a type-safe alternative to `any` because it requires type narrowing before usage.

---

# Very Important Rule

You can assign anything TO `unknown`:

```ts id="b7a6vl"
let value: unknown

value = "hello"
value = 10
value = true
```

But you cannot directly use it until narrowing.

---

# Practice Challenge

```ts id="n0u1a4"
function printLength(value: unknown) {

}
```

Task:

* If value is string → print length
* Otherwise print `"Not a string"`
