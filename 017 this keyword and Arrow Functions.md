Introduced in ES6 (2015), Arrow Functions give us a shorter, cleaner syntax for writing functions. 
But before understanding Arrow Functions, you must understand the 'this' keyword.
The this keyword simply refers to the current context (the current scope or object you are working inside).


this Keyword

Imagine you have a user object.
If a function inside that object wants to access the user's name, it shouldn't hardcode it. It should say, "Give me the username of this exact object."
```
const user = {
    username: "suraj",
    stockprize: 777,
    welcomeMessage: function() {
        // 'this' refers to the 'user' object itself
        console.log(`${this.username}, welcome to the website`);
        
        // If we print 'this', it shows the entire object!
        console.log(this); 
    }
}

user.welcomeMessage(); // Outputs: "suraj, welcome to the website"

// Changing the context:
user.username = "sam";
user.welcomeMessage(); // Outputs: "sam, welcome to the website"
```

**Interview Trap: The Global this**
What happens if you run console.log(this) completely on its own in the global scope?
- In Node.js (Terminal/VS Code): It returns an empty object {} because there is no global context defined yet.
- In the Browser (Chrome Console): It returns the Window object! (This is how you capture click events and alerts). Interviewers love asking this.

If you define a standard function and log this inside it (in Node), you get a massive global object with lots of internal Node processes. However, you cannot use this.variableName inside a standard Node function. It will return undefined. this is primarily used inside Objects.
















































