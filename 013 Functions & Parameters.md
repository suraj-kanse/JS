
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

(Pro-Tip: When working with buttons in React or the DOM later, you often just pass the reference sayMyName instead of executing it immediately with ().)

Parameters vs. Arguments

People use these words interchangeably, but technically they are different:
- Parameters: The variables you create when defining the function (e.g., num1, num2).
- Arguments: The actual raw data you pass in when calling the function (e.g., 3, 4).

```
// num1 and num2 are PARAMETERS
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// 3 and 4 are ARGUMENTS
addTwoNumbers(3, 4);
```

















