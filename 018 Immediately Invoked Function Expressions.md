An IIFE (pronounced "iffy") is a function that executes the exact moment it is defined.

While it's true that an IIFE is used for immediate execution, **the primary reason developers use an IIFE is to protect their variables from polluting the Global Scope.** 
If you only say "it executes immediately" in an interview, you won't stand out. 
If you mention "Global Scope Pollution," you will get the job!

Sometimes in JavaScript, you want a function to run the exact millisecond your file loads—like establishing a database connection the moment your app starts. 
To do this, we use an IIFE. 
But more importantly, IIFEs are a critical tool used to protect your code from the chaotic Global Scope.
```
// Syntax:
// ( Function Definition ) ( Execution ) ;

(function person() {
    console.log(`DB CONNECTED`);
})(); 
// Outputs: "DB CONNECTED" immediately without needing to be called on a separate line.
```

The Biggest IIFE Interview Trap: The Missing Semicolon
Interviewers love to ask candidates to write two IIFEs back-to-back in the same file. Most candidates fail this test because their code crashes.
- Why does it crash? When an IIFE executes, JavaScript doesn't automatically know where the function's context ends. If you don't explicitly terminate the first IIFE, JavaScript thinks the second IIFE is trying to execute inside the first one.
- The Fix: You must put a semicolon ; at the very end of your first IIFE to tell JavaScript that the execution context is completely finished.
```
// 1. A "Named IIFE" (because the function has the name 'person')
(function person() {
    console.log(`DB CONNECTED`);
})(); // Notice the Semicolon

// 2. An "Unnamed IIFE" using Arrow Function syntax
( () => {
    console.log(`DB CONNECTED TWO`);
})();
```






















