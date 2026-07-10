When scopes are nested inside each other (like a function inside a function, or an if block inside an if block), JavaScript follows strict rules about who can access whose data. 
Furthermore, how you write your functions completely changes whether **JavaScript lets you use them before you declare them—a concept known as Hoisting.**

Nested Scopes & Closures (The Ice Cream Rule)
- When you put a function inside another function, you create nested scopes.
- (The Ice Cream Rule):
- - Imagine an adult (the outer function) and a child (the inner function). The child can ask the adult for their ice cream (variables), and the adult will give it to them. However, if the adult asks the child for their ice cream, the child will refuse!
- Inner functions can access variables from their outer functions.
- Outer functions CANNOT access variables from their inner functions.
```
function one() {
    const username = "suraj"; // The Adult's Ice Cream

    function two() {
        const website = "youtube"; // The Child's Ice Cream
        
        // This WORKS: The child asks the adult for 'username'
        console.log(username); 
    } 
    // THIS CRASHES: The adult tries to take the child's 'website'
    // console.log(website); 
    two();
}
one();
```
Note: This specific behavior—where the inner function retains access to the outer function's scope—is the foundational concept behind Closures in JavaScript.

The Two Ways to Write Functions (Declarations vs. Expressions)
Up until now, you've likely just written functions one way. But there is a second way that is extremely common in modern JavaScript.

- Method 1: Function Declaration (The Standard Way)
```
function addOne(num) {
    return num + 1;
}
```
- Method 2: Function Expression (Storing in a Variable)
Because JavaScript treats functions as "First-Class Citizens," you can store an entire function inside a variable.
```
const addTwo = function(num) {
    return num + 2;
}
```

"Mini-Hoisting" (The Interview Trap!)
Now that you know the two ways to write functions, here is the massive "gotcha" that interviewers love to test. It all comes down to Execution Context (or "Hoisting").

Scenario 1: Calling a Function Declaration early
If you call a standard function before you actually write the code for it, JavaScript allows it. It "hoists" the function definition to the top of the file automatically.
```
console.log(addOne(5)); // Outputs: 6

function addOne(num) {
    return num + 1;
}
```

Scenario 2: Calling a Function Expression early
If you try to call a Function Expression (a function stored in a variable) before you write it, your program will crash. JavaScript knows the variable addTwo exists, but it hasn't initialized the function inside it yet.
```
console.log(addTwo(5)); // CRASH: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}
```

Summary & Takeaways
- Nested Scope: Inner blocks can access outer variables. Outer blocks cannot access inner variables.
- Function Declaration: Defined simply with function name() {}.
- Function Expression: A function stored inside a variable const name = function() {}.
- Hoisting Alert: You can call standard Function Declarations before they are defined in your code. You CANNOT do this with Function Expressions.
- Why it matters: If you see a "Cannot access 'X' before initialization" error, check to see if you accidentally tried to use a Function Expression too early in your file!
























