Scope determines where your variables "live" and where they can be accessed. 
If you don't understand scope, you will accidentally overwrite other developers' code, cause massive bugs, and pull your hair out trying to find out why a variable suddenly changed its value. 
This is the exact reason why modern JavaScript relies heavily on let and const and abandons var.

The { } Block (The Boundary)
Whenever you see a set of curly braces { } used in an if statement, a for loop, or a function (NOT an object literal), you are looking at a Block Scope.

- Think of it as a one-way mirror room. The code inside the room can see everything outside. The code outside the room cannot see what is inside.

Global Scope vs. Block (Local) Scope
- Global Scope: Variables defined outside of any { } block. They can be accessed from anywhere in your file.
- Block Scope: Variables defined inside a { } block. They should only be accessible inside that specific block.
```
let a = 300; // GLOBAL SCOPE (Can be seen everywhere)

if (true) {
    let a = 10; // BLOCK SCOPE (Only exists inside this 'if' block)
    const b = 20; 
    
    console.log("Inner a:", a); // Outputs: 10 (Prioritizes its local version)
}

// console.log(b); // CRASH: 'b' is not defined (It died when the block ended)

console.log("Outer a:", a); // Outputs: 300 (The global 'a' is safe and untouched!)
```

The Problem with var (Interview Essential)

Why did the JavaScript community replace var with let and const? Because var does not respect block scope.

If you declare a variable with var inside an if statement or a loop, it completely ignores the { } boundaries and leaks out into the Global Scope, accidentally overwriting other variables.
```
var c = 300; // A developer wrote this at the top of the file

if (true) {
    var c = 30; // Another developer wrote an 'if' block and re-used 'c'
}

console.log(c); // Outputs: 30 (The global 'c' was permanently overwritten!)
```
- The Scenario: Imagine 10 developers working on the same file. If everyone uses var i for their loops, every single loop will conflict with each other. By using let i, the variable i is safely contained inside its specific loop block.




Node.js vs. Browser Scope (Pro-Tip)

A highly asked interview question: "Is the Global Scope the same everywhere?"
- No. When you run console.log(this) or check the global scope in the Browser Console, the global object is the Window object.
- When you run the exact same code inside Node.js (your terminal/VS Code), the global scope is an empty object {}, not the Window. They are entirely different environments.


Summary & Takeaways
- { } defines a Block Scope (except when used for objects).
- Variables declared inside a block should NOT be accessible outside of it.
- Never use var. It leaks out of block scopes and causes catastrophic bugs by overwriting global variables.
- Global variables can be accessed inside blocks. If a block has a local variable with the exact same name, the block will prioritize its own local version.
- The Global Scope in a browser (Window) is completely different from the Global Scope in Node.js.
