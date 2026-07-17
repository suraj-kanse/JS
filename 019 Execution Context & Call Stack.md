To truly master JavaScript, you must understand exactly how it reads and executes your code behind the scenes. 
JavaScript runs code in two distinct phases: it first scans through everything to allocate memory, and only then does it actually execute the logic. 
Understanding this two-step process, combined with the Call Stack, answers almost every confusing behavior in JavaScript (like Hoisting).

The JavaScript Execution Context
When you hand a .js file to the JavaScript engine, the very first thing it does—before running a single line of your code—is create the Global Execution Context.
- Global Execution Context: This is the default environment where your code runs. It is always allocated to the this keyword.
- - Interview Trap: The value of this changes depending on your environment. If you run JavaScript in a Browser, this equals the Window object. If you run it in Node.js, this equals an empty object {}.
- Function Execution Context: Every single time a function is invoked, JavaScript creates a brand new, temporary "sandbox" for that function to run in.
- Eval Execution Context: (Advanced/Rare) Used when executing code inside the eval() function. You can mostly ignore this unless asked specifically.
(Important Note: JavaScript is a single-threaded language, meaning it executes one command at a time in a specific sequence).

The Two Phases of Execution
When a JavaScript file is processed, it goes through two mandatory phases:
Phase 1: Memory Creation Phase (or just "Creation Phase")
In this phase, JavaScript reads through your entire file line-by-line, but it does not execute any math or logic. Its only job is to find variables and functions and allocate memory space for them.
- For Variables (let, const, var): It allocates memory and sets their initial value to undefined. (It doesn't care if you wrote let val1 = 10;, it will store it as undefined in this phase).
- For Functions: It takes the entire block of code (the function definition) and stores it in memory exactly as written.

Phase 2: Execution Phase
Once the memory is allocated, JavaScript reads through the file a second time from top to bottom. Now, it actually executes the math and assigns the real values.
- Variables that were undefined are now assigned their actual values (e.g., val1 becomes 10).
- If a function is called, JavaScript pauses the main execution and creates a New Variable Environment + Execution Thread (a new Execution Context sandbox).

The Function Sandbox (The "Mini" Execution Context)
When a function is executed, it spins up its own mini-version of the two phases:
- Memory Phase: It finds all parameters and internal variables and sets them to undefined.
- Execution Phase: It assigns the arguments passed in, does the math, and determines the return value.
- Return & Destruction: The return value is passed back to the parent/Global Execution Context. Immediately after, the function's Execution Context sandbox is completely deleted from memory.

The Call Stack
If functions open up temporary execution sandboxes, how does JavaScript keep track of which function is currently running, especially if functions call other functions? It uses the Call Stack.
- Think of the Call Stack like a stack of plates.
- LIFO (Last In, First Out): The last plate placed on top of the stack is the first plate that must be removed.

How it works:
- The Global Execution Context is placed at the very bottom of the stack. It stays there until the program finishes.
- When functionOne() is called, it is pushed onto the stack.























