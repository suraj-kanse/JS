To truly master JavaScript, you must understand exactly how it reads and executes your code behind the scenes. 
JavaScript runs code in two distinct phases: it first scans through everything to allocate memory, and only then does it actually execute the logic. 
Understanding this two-step process, combined with the Call Stack, answers almost every confusing behavior in JavaScript (like Hoisting).

The JavaScript Execution Context
When you hand a .js file to the JavaScript engine, the very first thing it does—before running a single line of your code—is create the Global Execution Context.
- Global Execution Context: This is the default environment where your code runs. It is always allocated to the this keyword.
- - Interview Trap: The value of this changes depending on your environment. If you run JavaScript in a Browser, this equals the Window object. If you run it in Node.js, this equals an empty object {}.
- Function Execution Context: Every single time a function is invoked, JavaScript creates a brand new, temporary "sandbox" for that function to run in.
- Eval Execution Context: (Advanced/Rare) Used when executing code inside the eval() function. You can mostly ignore this unless asked specifically.



















