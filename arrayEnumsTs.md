# Arrays, Tuples, and Enums in TypeScript

These are very important concepts in TypeScript because they help us store and manage data safely.

---

# 1. Arrays in TypeScript

An **array** stores multiple values in a single variable.

## Example

```ts
let teas: string[] = ["Masala Tea", "Green Tea", "Black Tea"];

console.log(teas);
```

## Explanation

* `string[]`
  → means this array can store only strings.

* If you try to add a number:

```ts
teas.push(10); // Error
```

TypeScript will show an error because the array only accepts strings.

---

# Another Way to Write Arrays

```ts
let prices: Array<number> = [10, 20, 30];
```

This is the same as:

```ts
let prices: number[] = [10, 20, 30];
```

---

# Mixed Type Array

Using Union Types:

```ts
let data: (string | number)[] = ["Tea", 20, "Coffee", 50];
```

## Explanation

This array can store:

* strings
* numbers

because we used:

```ts
string | number
```

---

# Real-World Example

```ts
let students: string[] = ["Rahul", "Aman", "Priya"];

students.push("Neha");

console.log(students);
```

---

# 2. Tuples in TypeScript

A **tuple** is a special type of array where:

* number of elements is fixed
* types are fixed
* order matters

---

## Example

```ts
let teaInfo: [string, number];

teaInfo = ["Masala Tea", 25];

console.log(teaInfo);
```

---

## Explanation

This tuple means:

```ts
[string, number]
```

So:

* first value must be string
* second value must be number

Correct:

```ts
["Green Tea", 30]
```

Wrong:

```ts
[30, "Green Tea"] // Error
```

because order is important.

---

# Real-World Example of Tuple

```ts
let user: [number, string];

user = [101, "Prashant"];

console.log(user);
```

Meaning:

* `101` → user ID
* `"Prashant"` → username

---

# Tuple with Optional Value

```ts
let employee: [number, string, string?];

employee = [1, "Rahul"];

employee = [1, "Rahul", "Developer"];
```

## Explanation

`?` means optional value.

---

# 3. Enums in TypeScript

Enum means a group of named constants.

Enums make code more readable and manageable.

---

# Numeric Enum

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
```

---

## Explanation

By default:

```ts
Up = 0
Down = 1
Left = 2
Right = 3
```

---

# Custom Numeric Enum

```ts
enum StatusCode {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(StatusCode.Success);
```

---

# String Enum

```ts
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(UserRole.Admin);
```

---

# Real-World Example

```ts
enum OrderStatus {
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}

let currentStatus = OrderStatus.Shipped;

console.log(currentStatus);
```

---

# Difference Between Array and Tuple

| Feature         | Array         | Tuple       |
| --------------- | ------------- | ----------- |
| Size            | Flexible      | Fixed       |
| Types           | Same or mixed | Fixed order |
| Order Important | No            | Yes         |

---

# Quick Revision

## Arrays

```ts
let numbers: number[] = [1, 2, 3];
```

Store multiple values.

---

## Tuples

```ts
let person: [string, number] = ["Prashant", 22];
```

Fixed types + fixed order.

---

## Enums

```ts
enum Role {
    Admin,
    User
}
```

Used for named constant values.

---

# When to Use Them

| Concept | Use Case                   |
| ------- | -------------------------- |
| Array   | List of items              |
| Tuple   | Fixed structured data      |
| Enum    | Predefined constant values |

---

# Simple Real-Life Understanding

* **Array**
  → A school bag with many books.

* **Tuple**
  → Aadhaar card details with fixed format.

* **Enum**
  → Traffic light states:

  * RED
  * YELLOW
  * GREEN
