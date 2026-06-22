The Interview Trap: Using a Symbol as a Key
This is a favorite interview question: "Create a Symbol, add it to an object as a key, and print it."

If you just type the symbol name as a key, JavaScript converts it into a normal string. To explicitly tell JavaScript to treat it as a Symbol, you must wrap the key in square brackets.
```
const mySym = Symbol("key1");
// A Symbol is a special type of key in JavaScript.
// mySym is not the string "mySym".
// It's a unique Symbol value.

const user = {
    name: "Suraj",
    // BAD: This becomes a normal string key
    // mySym: "myValue", 
    
    // GOOD: This is officially a Symbol key
    [mySym]: "myValue" 
};

// Accessing the Symbol
console.log(user[mySym]);
```
<br/>
<br/>
Simple Explanation:

The common mistake
Many people think this:
```
const mySym = Symbol("key1");

const user = {
  mySym: "myValue"
};
```
it creates a Symbol key.
It does not.
JavaScript reads mySym: as a normal property name and converts it into a string key.
Equivalent to:
```
const user = {
  "mySym": "myValue"
};

// So the object becomes: { mySym: "myValue" }
```

Solution-
```
const mySym = Symbol("key1");

const user = {
  [mySym]: "myValue"
  // []: To tell JavaScript- Use the value stored inside mySym as the key
};
```
Now JavaScript evaluates mySym first and uses the Symbol itself as the key.
```
const key = "name";

const user = {
  [key]: "Suraj"
};
// So the object becomes: { name: "Suraj" }

```
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
Tip: Modifying and Freezing Objects
Overwriting data is as simple as reassigning it with an equals sign. But what if you want to completely lock an object so nobody can change it? Use Object.freeze().
<br/>

```
jsUser.email = "suraj@openai.com"; // Successfully overwritten

// Locking the object
Object.freeze(jsUser);

jsUser.email = "suraj@anthropic.com"; // This will be IGNORED.
console.log(jsUser.email); // Outputs: "suraj@openai.com"
```
