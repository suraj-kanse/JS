As your applications grow, you won't just be dealing with simple flat objects. 
You will encounter objects nested inside other objects, and arrays filled with hundreds of objects (especially when fetching data from a database).
Knowing how to safely access this nested data, combine objects together, and extract their keys/values is essential for modern JavaScript development.

Nested Objects & Safe Access
You can nest objects infinitely inside each other. To access the data, you simply chain the dot notation.
```
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "suraj",
            lastName: "kanse"
        }
    }
}

// Accessing nested data
console.log(regularUser.fullName.userFullName.firstName); // Outputs: "suraj"
```
- Tip for Crash Prevention: The Optional Chaining Tip (?)
- In the real world, an API might fail to return the fullName object. If you try to access userFullName inside a missing object, your entire app will crash. To prevent this, you use Optional Chaining (?).
```
// The '?' asks: "Does fullName exist? If yes, continue. If no, stop and return undefined without crashing."
console.log(regularUser.fullName?.userFullName.firstName);
```
