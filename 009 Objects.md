Declaring Objects (Singleton vs. Literals)
There are two primary ways to declare an object:

1. As a Constructor (Object.create) (Singleton): 
- This creates a Singleton object (meaning it's the only instance of its kind).
- When we talk about constructors in JavaScript, there are two ways to look at it: using the built-in Object constructor, or creating your own custom constructor blueprint.

A. The Built-in **new Object()** keyword 
- The Singleton
- Using new Object() creates a Singleton. It means it is a unique, one-of-a-kind object in your application at that exact moment.
```
// Creating an empty object using the built-in constructor
const userProfile = new Object(); 

// Adding properties to it one by one
userProfile.username = "suraj_sk";
userProfile.isLoggedIn = true;

console.log(userProfile.username); // Outputs: "suraj_sk"
```
(Note: In terms of actual output, new Object() and {} act exactly the same. However, behind the scenes, the memory management and Singleton behavior are slightly different.)



B. Custom Constructor Functions **(The Blueprint)**
- If you want to create many objects that all share the exact same structure (like creating 100 different users), you wouldn't write 100 object literals. You would create a custom constructor. It acts as a factory blueprint.

```
// This function is a Constructor (Notice the Capital 'U')
function User(username, email, age) {
    // 'this' refers to the specific object being created right now (context & scope)
    this.username = username;
    this.email = email;
    this.age = age;
    
    this.login = function() {
        console.log(`${this.username} has logged in!`);
    };
}

// Now we can easily pump out as many unique users as we want using the 'new' keyword!
const userOne = new User("suraj", "suraj@entp.com", 25);
const userTwo = new User("pratik", "pratik@dfmg.com", 28);

console.log(userOne.email); // Outputs: "suraj@entp.com"
userTwo.login();            // Outputs: "pratik has logged in!"
```



2. As an Object Literal ({}) (Literal)
- This is the most common way we write objects daily. It does not create a singleton.
- An Object Literal is the most common, easiest, and fastest way to create an object. You simply define the object right on the spot using curly braces {}.
- Every time you create an object this way, you are creating a fresh, independent object (it is not a Singleton).
```
// Creating an object using a literal
const smartphone = {
    brand: "Motorola",
    model: "Edge 40",
    batteryLife: 100,
    
    // You can also add functions (methods) inside
    call: function() {
        console.log("Dialing number...");
    }
};

// Accessing the data
console.log(smartphone.brand); // Outputs: "Motorola"
smartphone.call();             // Outputs: "Dialing number..."
```


```
// 1. The Literal Way (Standard Practice)
const jsUser = {
    name: "Suraj",
    "full name": "Suraj Kanse", // Notice the space!
    age: 18,
    location: "Rahata",
    email: "suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
```

Accessing Object Data (The "Dot" vs "Bracket" Notation)
Many people assume that only the dot notation exist, but you must know the bracket notation for advanced scenarios.

- Dot Notation (.): The easiest and most common way.

- Bracket Notation ([]): Required when a key is stored as a string with a space (like "full name"), or when you are using a Symbol. Behind the scenes, JavaScript tracks all standard keys as strings.
```
// Dot Notation
console.log(jsUser.email); 

// Bracket Notation (Mandatory for spaced keys!)
console.log(jsUser["full name"]); 
// console.log(jsUser.full name); // THIS WILL CRASH
```





