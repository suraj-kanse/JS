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
Even though its value is NaN, if you check typeof NaN, JS will still tell you it is a "number".
