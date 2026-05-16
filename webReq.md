Here’s a simple and beginner-friendly example of making a **web request in TypeScript using Axios**.

First install Axios:

```bash
npm install axios
```

---

# Basic GET Request

```ts
import axios from "axios";

// Async function to fetch data
async function getUsers() {
    try {
        // Sending GET request
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        // API response data
        console.log(response.data);

    } catch (error) {
        // Error handling
        console.log("Something went wrong:", error);
    }
}

// Function call
getUsers();
```

---

# Understanding Step by Step

## 1. Import Axios

```ts
import axios from "axios";
```

Axios is a library used to make HTTP requests.

---

## 2. Create Async Function

```ts
async function getUsers()
```

Web requests take time, so we use `async`.

---

## 3. Send Request

```ts
const response = await axios.get(url);
```

* `await` waits for the response
* `.get()` sends a GET request

---

## 4. Access Data

```ts
response.data
```

Axios stores API data inside `.data`.

---

# POST Request Example

```ts
import axios from "axios";

type User = {
    name: string;
    email: string;
};

async function createUser(user: User) {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            user
        );

        console.log("Created User:", response.data);

    } catch (error) {
        console.log("Error:", error);
    }
}

createUser({
    name: "Prashant",
    email: "prashant@gmail.com"
});
```

---

# Using Types with Axios

TypeScript becomes powerful when you define response types.

```ts
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
};

async function getUser() {
    const response = await axios.get<User>(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log(response.data.name);
}

getUser();
```

---

# Multiple Request Methods

| Method | Purpose             |
| ------ | ------------------- |
| GET    | Fetch data          |
| POST   | Create data         |
| PUT    | Update full data    |
| PATCH  | Update partial data |
| DELETE | Remove data         |

---

# Example of DELETE Request

```ts
import axios from "axios";

async function deleteUser(id: number) {
    try {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        console.log("User deleted");

    } catch (error) {
        console.log(error);
    }
}

deleteUser(1);
```

---

# Real World Structure (Professional)

```ts
import axios from "axios";

// Creating reusable axios instance
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
```

Usage:

```ts
import api from "./api";

async function getPosts() {
    const response = await api.get("/posts");

    console.log(response.data);
}
```

---

# Why Developers Use Axios

* Cleaner syntax
* Automatic JSON parsing
* Better error handling
* Request timeout support
* Interceptors support
* Works well with React + TypeScript

---

# Interview Tip

Very commonly asked:

> Difference between `fetch()` and `axios`

### Fetch

* Built into browser
* Needs manual JSON conversion

```ts
const data = await response.json();
```

### Axios

* Automatically converts JSON
* Better error handling
* Cleaner syntax

---

# Recommended Next Step

After learning Axios, practice:

1. Fetching users
2. Creating posts
3. Updating data
4. Error handling
5. Loading state
6. API integration in React
7. Authentication with tokens

These are real frontend developer skills.

# 1. Fetching Users (GET Request)

This is used when you want to get data from a server.

Example:

* User list
* Products
* Blog posts
* Movies

```ts
import axios from "axios";

async function fetchUsers() {
    try {
        // Sending GET request
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        // API data
        console.log(response.data);

    } catch (error) {
        console.log("Error fetching users:", error);
    }
}

fetchUsers();
```

---

# 2. Creating Posts (POST Request)

Used to send new data to server.

Example:

* Creating account
* Adding product
* Posting comment

```ts
import axios from "axios";

type Post = {
    title: string;
    body: string;
};

async function createPost(post: Post) {
    try {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            post
        );

        console.log("Created Post:", response.data);

    } catch (error) {
        console.log("Error creating post:", error);
    }
}

createPost({
    title: "Learning TypeScript",
    body: "Axios is very powerful"
});
```

---

# 3. Updating Data (PUT & PATCH)

## PUT → Replace Entire Data

```ts
import axios from "axios";

async function updatePost() {
    try {
        const response = await axios.put(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                title: "Updated Title",
                body: "Updated Body"
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
}

updatePost();
```

---

## PATCH → Update Partial Data

```ts
import axios from "axios";

async function updateTitle() {
    try {
        const response = await axios.patch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                title: "Only Title Updated"
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error);
    }
}

updateTitle();
```

---

# 4. Error Handling

Very important in real applications.

Without error handling:

* App can crash
* White screen
* Bad user experience

---

## Proper Error Handling

```ts
import axios from "axios";

async function getData() {
    try {
        const response = await axios.get(
            "https://wrong-api-url.com"
        );

        console.log(response.data);

    } catch (error: any) {

        // Server responded with error
        if (error.response) {
            console.log("Server Error:", error.response.status);

        // No response from server
        } else if (error.request) {
            console.log("No response from server");

        // Other errors
        } else {
            console.log("Error:", error.message);
        }
    }
}

getData();
```

---

# 5. Loading State

Loading state improves user experience.

Without loading:

* User thinks app is frozen

---

# React Example

```tsx
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
    id: number;
    name: string;
};

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchUsers() {
        try {
            setLoading(true);

            const response = await axios.get<User[]>(
                "https://jsonplaceholder.typicode.com/users"
            );

            setUsers(response.data);

        } catch (error) {
            console.log(error);

        } finally {
            // Always runs
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {users.map((user) => (
                <h2 key={user.id}>{user.name}</h2>
            ))}
        </div>
    );
}

export default App;
```

---

# 6. API Integration in React

Real frontend development = connecting frontend with backend.

Typical Flow:

Frontend (React)
⬇
Axios Request
⬇
Backend API
⬇
Database

---

# Professional Folder Structure

```txt
src/
│
├── api/
│   └── axios.ts
│
├── services/
│   └── userService.ts
│
├── components/
│
├── pages/
│
└── App.tsx
```

---

# Create Reusable Axios Instance

## api/axios.ts

```ts
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
```

---

# Create Service Layer

## services/userService.ts

```ts
import api from "../api/axios";

export async function getUsers() {
    const response = await api.get("/users");

    return response.data;
}
```

---

# Use Inside React Component

```tsx
import { useEffect, useState } from "react";
import { getUsers } from "./services/userService";

function App() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        async function loadUsers() {
            const data = await getUsers();

            setUsers(data);
        }

        loadUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default App;
```

---

# 7. Authentication with Tokens

Very important for real applications.

Used in:

* Login systems
* Protected routes
* User dashboard
* Admin panel

---

# Login Example

```ts
import axios from "axios";

async function login() {
    try {
        const response = await axios.post(
            "https://example.com/login",
            {
                email: "test@gmail.com",
                password: "123456"
            }
        );

        // JWT token from backend
        const token = response.data.token;

        // Save token
        localStorage.setItem("token", token);

        console.log("Login successful");

    } catch (error) {
        console.log(error);
    }
}
```

---

# Sending Token in Requests

```ts
import axios from "axios";

const token = localStorage.getItem("token");

axios.get("https://example.com/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```

---

# Professional Way → Axios Interceptor

```ts
import axios from "axios";

const api = axios.create({
    baseURL: "https://example.com"
});

// Automatically attach token
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
```

---

# Real Skills Companies Expect

If you can do these properly:

✅ Fetch API data
✅ Handle loading state
✅ Handle errors
✅ Create reusable API layer
✅ Authentication flow
✅ Token handling
✅ CRUD operations
✅ React integration

Then you are already doing real frontend engineering work.

---

# Best Practice Tips

## 1. Never write API calls directly everywhere

❌ Bad

```ts
axios.get(...)
```

everywhere in components.

✅ Good

Create:

* api layer
* service layer

---

## 2. Always use TypeScript types

```ts
type User = {
    id: number;
    name: string;
};
```

---

## 3. Handle Loading + Error States

Professional apps always handle:

* loading
* success
* error

---

## 4. Keep Secrets in `.env`

```env
VITE_API_URL=https://api.example.com
```

---

# Your Next Real Project

Build these now:

1. User Dashboard
2. Todo App with API
3. Blog App
4. Authentication System
5. Weather App
6. Admin Dashboard
7. Ecommerce Frontend

These projects will strengthen:

* React
* TypeScript
* Axios
* State management
* Real API handling
* Frontend architecture

