Declaring Objects (Singleton vs. Literals)
There are two primary ways to declare an object:

1. As a Constructor (Object.create) (Singleton): This creates a Singleton object (meaning it's the only instance of its kind).

2. As an Object Literal ({}) (Literal): This is the most common way we write objects daily. It does not create a singleton.

An Object Literal is the most common, easiest, and fastest way to create an object. You simply define the object right on the spot using curly braces {}.

Every time you create an object this way, you are creating a fresh, independent object (it is not a Singleton).
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
Most tutorials only teach you the dot notation, but you must know the bracket notation for advanced scenarios.

- Dot Notation (.): The easiest and most common way.

- Bracket Notation ([]): Required when a key is stored as a string with a space (like "full name"), or when you are using a Symbol. Behind the scenes, JavaScript tracks all standard keys as strings.
```
// Dot Notation
console.log(jsUser.email); 

// Bracket Notation (Mandatory for spaced keys!)
console.log(jsUser["full name"]); 
// console.log(jsUser.full name); // ❌ THIS WILL CRASH
```





