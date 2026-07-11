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



















































