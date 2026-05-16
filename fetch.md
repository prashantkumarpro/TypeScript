`fetch` in TypeScript is used to make HTTP requests (API calls).
It is built into modern browsers and Node.js (latest versions).

Here’s how to use it properly with TypeScript.

---

# Basic Fetch in TypeScript

```ts
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Convert response into JSON
    const data = await response.json();

    console.log(data);
}

getUsers();
```

---

# Why `async/await`?

`fetch()` returns a Promise.

So we use:

```ts
await fetch(...)
```

to wait for the API response.

---

# Add Proper Type Safety (Very Important)

Without TypeScript types, you lose autocomplete and safety.

---

# Step 1: Create Interface

```ts
interface User {
    id: number;
    name: string;
    email: string;
}
```

This describes the shape of user data coming from the API.

---

# Step 2: Use Type in Fetch

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

async function getUsers(): Promise<User[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data: User[] = await response.json();

    return data;
}

getUsers().then((users) => {
    console.log(users);

    users.forEach((user) => {
        console.log(user.name);
    });
});
```

---

# POST Request in TypeScript

Used to send data to server.

```ts
interface PostData {
    title: string;
    body: string;
}

async function createPost(post: PostData) {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(post),
        }
    );

    const data = await response.json();

    console.log(data);
}

createPost({
    title: "Learning TypeScript",
    body: "Fetch API is powerful",
});
```

---

# PUT Request (Update Data)

```ts
async function updatePost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                title: "Updated Title",
            }),
        }
    );

    const data = await response.json();

    console.log(data);
}

updatePost();
```

---

# DELETE Request

```ts
async function deletePost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE",
        }
    );

    console.log(response.ok);
}

deletePost();
```

---

# Error Handling (Professional Way)

Very important for real frontend jobs.

```ts
interface User {
    id: number;
    name: string;
}

async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Handle failed request
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        return data;
    } catch (error) {
        console.log("Error:", error);

        return [];
    }
}

getUsers();
```

---

# Fetch in React + TypeScript

```tsx
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data: User[] = await response.json();

            setUsers(data);
        }

        fetchUsers();
    }, []);

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

# Real Frontend Developer Skills You Should Practice

Since you're learning TypeScript for frontend engineering, practice these next:

1. Fetching users
2. Creating posts
3. Updating data
4. Deleting data
5. Error handling
6. Loading state
7. API integration in React
8. Authentication with JWT token
9. Protected API routes
10. Pagination
11. Infinite scrolling
12. Debounced search
13. Retry requests
14. File upload
15. Custom API hooks

---

# Example: Loading State in React

```tsx
const [loading, setLoading] = useState(false);

async function fetchUsers() {
    try {
        setLoading(true);

        const response = await fetch("API_URL");

        const data = await response.json();

        console.log(data);
    } finally {
        setLoading(false);
    }
}
```

---

# Authentication Example

```ts
const response = await fetch("API_URL", {
    headers: {
        Authorization: `Bearer TOKEN`,
    },
});
```

---

# Important Interview Concept

`fetch()` only rejects on network errors.

If server returns:

```ts
404
500
401
```

fetch DOES NOT throw automatically.

That’s why we check:

```ts
if (!response.ok)
```

---

# Difference Between Fetch and Axios

| Feature                | fetch | Axios |
| ---------------------- | ----- | ----- |
| Built into browser     | ✅     | ❌     |
| Automatic JSON parsing | ❌     | ✅     |
| Request timeout        | ❌     | ✅     |
| Better error handling  | ❌     | ✅     |
| Interceptors           | ❌     | ✅     |
| Lightweight            | ✅     | ❌     |

---

# Best Practice

For small projects:

* `fetch` is enough.

For large production apps:

* Many companies use Axios because:

  * cleaner syntax
  * interceptors
  * token handling
  * better scaling
  * request cancellation
  * centralized API layer
