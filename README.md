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
console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCountry]);```


alert("hello") works in the browser because the JS engine is embedded there and has a document object. It will throw an error in Node.js because there is no browser window to pop up


