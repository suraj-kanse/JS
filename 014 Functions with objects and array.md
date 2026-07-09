In real-world applications,
You rarely pass just one or two simple numbers into a function. 
You will frequently encounter scenarios where you don't know how many arguments are coming (like a shopping cart), 
or you need to pass entire objects and arrays as arguments.


The Shopping Cart Problem & The Rest Operator (...)

Imagine you are building a checkout function for an e-commerce app. 
A user might buy 1 item, or they might buy 10. You cannot define 10 separate parameters (num1, num2, num3...) because you don't know the exact count in advance.

To solve this, we use the Rest Operator (...).
(Note: It looks exactly like the Spread operator, but it does the exact opposite. Spread shatters an array; Rest bundles loose items into an array).
```
// The '...' catches all incoming arguments and bundles them into a single array called 'num1'
function calculateCartPrice(...num1) {
    return num1; 
}

console.log(calculateCartPrice(200, 400, 500, 2000)); 
// Output: [200, 400, 500, 2000]
// (Now that it's an array, you can easily use a loop to add all the prices together!)
```




















