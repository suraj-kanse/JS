
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

The Biggest Beginner Trap: console.log vs return
This is where most bugs originate. A function does not automatically give its result back to the rest of your program just because you console.log it.
If you try to save a console.log function to a variable, the variable will be undefined.
```
// BAD: This just prints to the screen, it doesn't give the value back.
function badAdd(num1, num2) {
    console.log(num1 + num2);
}
const badResult = badAdd(3, 4); 
console.log(badResult); // Outputs: undefined


// GOOD: This explicitly hands the value back to the program.
function goodAdd(num1, num2) {
    return num1 + num2;
    // Note: ANY code written after 'return' will never be executed.
}
const goodResult = goodAdd(3, 4);
console.log(goodResult); // Outputs: 7
```


Handling Missing Arguments & Default Values:
If a user forgets to pass an argument into your function, 
JavaScript doesn't crash immediately; 
it sets that parameter to undefined. 
This is a major interview concept!

To prevent weird behavior or undefined showing up on your website, you have two options:
- 1. Check for undefined using an if statement (and the ! operator):
```
function loginUserMessage(username) {
    // The '!' converts undefined (a falsy value) into true, triggering the block
    if(!username) { 
        console.log("Please enter a username");
        return; // Stops the function immediately
    }
    return `${username} just logged in`;
}

loginUserMessage(); // Triggers the if block because username is undefined.
```

- 2. Use Default Parameters (The Modern Way):
You can assign a fallback value right in the parameter list. If the user passes real data, it overwrites the default. If they pass nothing, the default kicks in safely.
```
// "Sam" is the default fallback
function loginUserMessage(username = "Sam") {
    return `${username} just logged in`;
}

console.log(loginUserMessage());         // Outputs: "Sam just logged in"
console.log(loginUserMessage("Suraj"));  // Outputs: "Suraj just logged in"
```
You can assign a fallback value right in the parameter list. If the user passes real data, it overwrites the default. If they pass nothing, the default kicks in safely.

Summary & Takeaways
- Adding () to a function's name executes it. Without (), you are just pointing to it.
- Parameters are the placeholders; Arguments are the actual values you pass in.
- console.log() only shows data to the developer; return gives data back to the program to be stored in variables.
- Code written below a return statement is "unreachable" and will never run.
- If an argument is missing, JavaScript evaluates it as undefined.
- Use default parameters (username = "Guest") to safely handle missing data without writing clunky if statements.










