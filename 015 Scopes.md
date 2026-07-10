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

























