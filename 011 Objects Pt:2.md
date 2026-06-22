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
console.log(regularUser.fullName?.userFullName.firstName);
// The '?' asks: "Does fullName exist? If yes, continue. If no, stop and return undefined without crashing."
```
<br/>

Merging Objects
Just like arrays, you will frequently need to combine multiple objects into one.

1. The Object.assign() Method
- This method copies properties from one or more source objects into a target object.
- Best Practice: Always provide an empty object {} as the very first argument (the target).
- This guarantees that a brand new object is returned, rather than accidentally mutating your original source objects.
```
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Merging into a new empty object
const obj3 = Object.assign({}, obj1, obj2);
```
2. The Spread Operator (...) [Industry Standard]
- Exactly like arrays, the spread operator "shatters" the objects and spills their key-value pairs into a new object. 
- This is the cleanest and most common way to merge objects.
```
const obj3 = {...obj1, ...obj2};
```
<br/>

Handling Database Responses (Array of Objects)
- When you ask a database for users, it almost always replies with an Array containing multiple Objects.
- You need to know how to target specific data inside them.
```
const users = [
    { id: 1, email: "a@gmail.com" },
    { id: 2, email: "b@gmail.com" },
    { id: 3, email: "c@gmail.com" }
]

// To get the email of the second user:
// 1. Target the array index [1]
// 2. Use dot notation for the object property
console.log(users[1].email); // Outputs: "b@gmail.com"
```
