In JavaScript, there are three main ways to reserve space in memory-

-- const (Constant): Use this for values that should never change once they are set. If you try to overwrite a const value later, JavaScript will throw a strict error.

-- let: Use this for values that might change or update later on. For example, a user might decide to change their email address or update their password.

-- var: The old way of declaring variables. Never use this anymore.


Why Should We Stop Using var?
In older JavaScript code, everyone used var. But it had a major flaw: it doesn't respect "Block Scope".
A block scope is just the area between curly braces {}. If one programmer created a var accountPassword at the top of a file, and another programmer accidentally created another var accountPassword inside an if statement block, the second one would overwrite the first one everywhere! This caused massive, hard-to-track bugs. let and const were introduced to fix this block scope issue perfectly.

```
// 1. Using 'const' - The value is locked and cannot be mutated
const accountId = 144553; 

// 2. Using 'let' - The value can be updated later
let accountEmail = "surajkanse88@gmail.com";
let accountPassword = "12345";

// 3. Using 'var' - Avoid using this because of scope issues!
var accountCity = "Somewhere";

// 4. Declaring without a keyword - Possible in JS, but TERRIBLE practice
accountState = "Maharashtra";

// 5. Declaring but NOT assigning a value
let accountCountry; 

/* --- Modifying the data --- */

// accountId = 2; // ❌ NOT ALLOWED! This will crash the app because it's a const.
accountEmail = "suraj@kanse.com"; // ✅ Allowed because we used 'let'
accountPassword = "212121"; // ✅ Allowed
accountCity = "Somewhere";  // ✅ Allowed, but again, avoid var

// Printing everything easily using a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCountry]);
```


alert("hello") works in the browser because the JS engine is embedded there and has a document object. It will throw an error in Node.js because there is no browser window to pop up

Data Types:
-- number
-- bigint: For big/massive numbers.
-- string: Text in quotes (single or double).
-- boolean: true or false.
-- null: A standalone value representing an intentional empty value [12:36]. Analogy: Asking a server for temperature. If it returns 0, that's a valid temperature. If it fails, it should return null (empty), not 0.
-- undefined: A variable is declared but no value is assigned yet.
-- symbol: Used for uniqueness, heavily used in React (Figma tools, etc.) to identify specific components uniquely.
-- object: Complex data structures.

JavaScript allows you to write messy code without semicolons or put multiple commands on a single line. Don't do it. Your highest priority as a developer should be writing code that is clean and easily readable by other humans

MDN (Mozilla Developer Network): Your daily driver. It's the easiest and most practical place to read about JS features

```
"use strict"; // Treat all JS code as newer version

let name = "Hitesh"; // string
let age = 18;        // number
let isLoggedIn = false; // boolean
let state;           // undefined

console.log(typeof age); // Outputs: "number"
console.log(typeof state); // Outputs: "undefined"
console.log(typeof null); // Outputs: "object", often considered a bug
```

"33" easily converts to the number 33
"33abc" converts to NaN (Not a Number)
Even though its value is NaN, if you check typeof NaN, JS will still tell you it is a "number"

null converts to 0. (Be careful with this if you are calculating temperatures or scores where 0 means something specific!).
Undefined: undefined converts to NaN.
Booleans: true converts to 1, and false converts to 0.
Text: A regular string like "SURAJ" converts to NaN.

Coverting Booleans- 
```
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // Outputs: true
```
Converting to Strings-
```
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);        // Outputs: 33
console.log(typeof stringNumber); // Outputs: "string"
```

Operations in JS (like +, -, *) are easy until you mix data types. Relying on JS to auto-convert types can lead to buggy, unreadable code. Write clean, explicit code using parentheses rather than trying to act "smart" with confusing syntax.

Basic Operations: Standard math works as expected (2+2, 2-2, 2*2, 2**3 for power, 2/3, 2%3 for remainder).

String Concatenation: "hello" + " suraj" works perfectly.

"1" + 2 -> "12" (string wins)

1 + "2" -> "12" (string wins)

"1" + 2 + 2 -> "122" (If string is first, everything is treated as a string)

1 + 2 + "2" -> "32" (Math happens first, then string concatenation).

The Golden Rule:

If the string comes first, everything after it is treated as a string.

If the numbers come first, the math is executed until a string is encountered, and then it concatenates.

```
// 1. Simple mixing
console.log("1" + 2); // Outputs: "12"
console.log(1 + "2"); // Outputs: "12"

// 2. The Tricky Scenarios
// String is first: Everything is concatenated as text
console.log("1" + 2 + 2); // Outputs: "122" 

// Numbers are first: Math happens first (1+2=3), then it's glued to the string
console.log(1 + 2 + "2"); // Outputs: "32"
```

From an official documentation and interview perspective, JavaScript data types are strictly divided into just two main categories: Primitive and Non-Primitive (Reference).

how the data is stored in memory and how you access it.

⚡ JavaScript is a "Dynamically Typed" Language
In languages like C++ or Java, you have to explicitly tell the computer what type of data a variable will hold (e.g., int score = 100;). JavaScript is smart enough to figure it out on the fly. You just write let score = 100; and JS knows it's a number. You don't have to define the type, making it a dynamically typed language.

🧱 1. Primitive Data Types (Call by Value)
When you copy a primitive data type from one variable to another, JavaScript gives you a completely independent copy of the original value. Changing the copy does not change the original data.

There are exactly 7 Primitive Data Types:

String: Text data.

Number: Covers both regular integers (100) and decimal/float values (100.3). There is no separate "float" type in JS.

Boolean: true or false.

Null: An explicit representation of an empty value (like an intentionally empty temperature reading, not 0).

Undefined: A variable has been declared, but you haven't put anything inside it yet.

Symbol: Used to make a value completely, mathematically unique. Even if you pass the exact same string into two symbols, they will not equal each other.

BigInt: Used for massive numbers (like scientific data). You define it by simply adding an n to the end of the number.

🔗 2. Non-Primitive Data Types (Reference Types)
When you assign these to a variable, JavaScript doesn't give you a copy of the data. Instead, it gives you a reference (a memory address) pointing to where that data lives.

There are 3 Main Reference Types:

Array: A list of items grouped together inside square brackets [].

Object: Data stored in key-value pairs inside curly braces {}. (Pro-tip: The instructor noted that mastering Objects and Browser Events is the secret to mastering JavaScript!)

Function: Reusable blocks of code. In JavaScript, you can treat functions exactly like variables and store them in memory.

```
// Array
const tasks = ["programming", "communication", "personality"];

// Object
let myObj = {
    name: "SURAJ",
    age: 21,
}

// Function treated as a variable
const myFunction = function() {
    console.log("Hello JS from Suraj");
}
```

Memory allocation in modern languages like JavaScript happens automatically (unlike older languages like C where you have to manually reserve and free up space). However, understanding how JavaScript stores your data under the hood is crucial for avoiding confusing bugs. JavaScript uses two distinct types of memory spaces: Stack and Heap.


The type of memory JavaScript uses depends entirely on the data type (Primitive vs. Non-Primitive).

- Stack Memory (Used for Primitive Types)

-- What it stores: All primitive values (String, Number, Boolean, Null, Undefined, Symbol, BigInt).

-- How it works (The "Copy" Rule): When you assign a primitive variable to another variable, JavaScript gives you a brand new copy of the original value.

-- The Result: Changing the new variable does not affect the original variable. They live in two completely separate, independent spaces in the Stack.

- Heap Memory (Used for Non-Primitive/Reference Types)

-- What it stores: All non-primitive values (Arrays, Objects, Functions).

-- How it works (The "Reference" Rule): When you assign a non-primitive variable to another, JavaScript does not give you a copy of the actual data. Instead, it gives you a reference (a pointer/address) that looks at the exact same data box in the Heap.

-- The Result: Changing the new variable will alter the original variable because they both point to the exact same underlying data.


Stack Eg.-
```
let Name = "Suraj";
let anotherName = myName; // A fresh copy is created in the Stack

// Let's modify the copied variable
anotherName = "sURAJ";

// The original stays exactly the same!
console.log(Name); // Outputs: "Suraj"
console.log(anotherName);   // Outputs: "sURAJ"
```

Heap Eg.- 
```
let userOne = {
    email: "user@google.com",
    upi: "user@avcoe"
};

// userTwo doesn't get a copy of the object. It gets a line pointing to userOne's data.
let userTwo = userOne; 

// Let's modify a property using the second variable
userTwo.email = "suraj@college.com";

// Both variables reflect the change because they look at the exact same Heap memory!
console.log(userOne.email); // Outputs: "suraj@college.com"
console.log(userTwo.email); // Outputs: "suraj@college.com"
```

🚀 Quick Summary
Primitives go to the Stack. You get a copy. What happens in the copy, stays in the copy.

Non-Primitives go to the Heap. You get a reference. Modifying the reference modifies the original data for everyone pointing to it.


Today, you should use Backticks (`). This enables String Interpolation, which means you can create placeholders and inject variables directly into the string using the ${} syntax. It is much more readable and reliable.

```
const name = "suraj";
const repoCount = 50;

// Clean, readable, and modern syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
```

Declaring as an Object
You can also declare a string using the new keyword. While it yields the same text, it creates a String Object, which exposes exactly how JavaScript organizes strings under the hood (as key-value pairs where the index is the key).
```
const Name = new String('suraj-k');
```


