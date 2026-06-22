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
console.log(users[1].email); 
// Outputs: "b@gmail.com"
```
<br/>

The 3 Essential Object Methods
- When manipulating objects, you often need to convert their data into Arrays so you can run loops on them. JavaScript provides built-in methods on the Object constructor to do exactly this.
- Assume we have this object:
```
const wAUser = { id: "123", name: "Vibey", isLoggedIn: false };
```


Object.keys(wAUser)
What it does: Extracts only the keys and returns them as an Array.
Output: ["id", "name", "isLoggedIn"]
Use Case: Extremely common for looping through an object's properties.


Object.values(wAUser)
What it does: Extracts only the values and returns them as an Array.
Output: ["123", "Vibey", false]


Object.entries(wAUser)
What it does: Converts every single key-value pair into its own mini-array, and puts them all inside one giant array.
Output: [ ["id", "123"], ["name", "Vibey"], ["isLoggedIn", false] ]


Safety Checks: hasOwnProperty()
Before trying to extract data from a key, it's a good practice to ask the object if that key even exists. This prevents errors.
```
console.log(wAUser.hasOwnProperty('isLoggedIn')); // Outputs: true
console.log(wAUser.hasOwnProperty('isLogged'));   // Outputs: false
```


Summary & Takeaways
- Use Optional Chaining (?) when accessing deeply nested data to prevent crashes if the data is missing.
- The Spread Operator (...) is the cleanest and most modern way to merge objects.
- Database responses are usually an Array of Objects. Use standard array indexing followed by dot notation to extract the data (e.g., data[0].id).
- Object.keys() and Object.values() are your best friends because they convert object data into easily loopable Arrays.

