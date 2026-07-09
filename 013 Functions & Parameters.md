
A function is simply a package of code. 
If you find yourself writing the exact same 10 lines of code in multiple places, you should wrap it in a function. 
You write the logic once, and then you can "call" that package to execute wherever you need it.

Creating and Calling a Function

There is a massive difference between referencing a function and executing it.
```
// 1. Defining the Function
function sayMyName() {
    console.log("Suraj");
}

// 2. Referencing the Function (Does nothing on its own!)
sayMyName; 

// 3. Executing the Function (Actually runs the code)
sayMyName();
```

