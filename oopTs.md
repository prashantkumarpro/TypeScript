OOPs in TypeScript means **Object-Oriented Programming** using TypeScript.

It helps us organize code using:

* Classes
* Objects
* Inheritance
* Encapsulation
* Polymorphism
* Abstraction

TypeScript makes OOP more powerful because it adds **types** on top of JavaScript.

---

# 1. Class and Object

A **class** is a blueprint/template.

An **object** is the real thing created from the class.

```ts
// Class = Blueprint
class Tea {
  name: string;
  price: number;

  // Constructor runs automatically when object is created
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // Method
  serveTea() {
    console.log(`${this.name} tea is ready`);
  }
}

// Object creation
const masalaTea = new Tea("Masala", 20);

console.log(masalaTea.name); // Masala
masalaTea.serveTea();
```

---

# 2. Constructor

A constructor is a special method used to initialize values.

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new User("Prashant");

console.log(user1.name);
```

---

# 3. Access Modifiers

TypeScript provides:

| Modifier  | Meaning                               |
| --------- | ------------------------------------- |
| public    | Accessible everywhere                 |
| private   | Accessible only inside class          |
| protected | Accessible inside class + child class |

---

## Public

```ts
class Chai {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const tea = new Chai("Masala");

console.log(tea.name);
```

---

## Private

```ts
class BankAccount {
  private balance: number = 5000;

  showBalance() {
    console.log(this.balance);
  }
}

const account = new BankAccount();

// ❌ Error
// console.log(account.balance);

account.showBalance();
```

Private hides internal data.

This is called **Encapsulation**.

---

# 4. Inheritance

One class can inherit properties/methods from another class.

```ts
// Parent class
class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

// Child class
class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();

dog.sound();
dog.bark();
```

---

# 5. Method Overriding

Child class can change parent method behavior.

```ts
class Animal {
  makeSound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow Meow");
  }
}

const cat = new Cat();

cat.makeSound();
```

This is part of **Polymorphism**.

---

# 6. Encapsulation

Hiding internal details and controlling access.

```ts
class Employee {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const emp = new Employee(50000);

console.log(emp.getSalary());
```

---

# 7. Getter and Setter

Used to control reading/writing values.

```ts
class Student {
  private _marks: number = 0;

  get marks() {
    return this._marks;
  }

  set marks(value: number) {
    if (value < 0) {
      console.log("Marks cannot be negative");
      return;
    }

    this._marks = value;
  }
}

const s1 = new Student();

s1.marks = 90;

console.log(s1.marks);
```

---

# 8. Abstract Class

Abstract class cannot create objects directly.

It is used as a base class.

```ts
abstract class Shape {
  abstract area(): void;
}

class Circle extends Shape {
  area() {
    console.log("Area of circle");
  }
}

const c1 = new Circle();

c1.area();
```

---

# 9. Interface with Class

Interface defines structure/rules.

```ts
interface Payment {
  pay(): void;
}

class Paytm implements Payment {
  pay() {
    console.log("Payment successful");
  }
}

const user = new Paytm();

user.pay();
```

---

# Real-World Example

```ts
class User {
  constructor(
    public name: string,
    private password: string
  ) {}

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User deleted");
  }
}

const admin = new Admin("Prashant", "1234");

admin.login();
admin.deleteUser();
```

---

# Important OOP Concepts

| Concept       | Meaning           |
| ------------- | ----------------- |
| Class         | Blueprint         |
| Object        | Instance of class |
| Inheritance   | Reuse code        |
| Encapsulation | Hide data         |
| Polymorphism  | Many forms        |
| Abstraction   | Hide complexity   |

---

# Why OOP is Important

OOP helps:

* Write clean code
* Reuse code
* Manage large applications
* Build scalable apps
* Organize projects better

Used heavily in:

* React projects
* Backend development
* Game development
* Enterprise apps
* Node.js APIs

---

# TypeScript Shortcut Syntax

Instead of this:

```ts
class Tea {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
```

We can write:

```ts
class Tea {
  constructor(
    public name: string,
    public price: number
  ) {}
}
```

Cleaner and shorter.
