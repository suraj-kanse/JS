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



































