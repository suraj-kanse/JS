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
function calculateCartrollno(...num1) {
    return num1; 
}

console.log(calculateCartrollno(200, 400, 500, 2000)); 
// Output: [200, 400, 500, 2000]
// (Now that it's an array, you can easily use a loop to add all the rollnos together!)
```

The Interview Trap
Interviewers love to test if you truly understand how the Rest operator handles parameters when mixed with standard variables.
```
function calculateAdvancedrollno(val1, val2, ...restOfItems) {
    return restOfItems;
}

console.log(calculateAdvancedrollno(200, 400, 500, 2000));
// Output: [500, 2000]
// Why? '200' is captured by val1, '400' is captured by val2. 
// The Rest operator only bundles what is left over!
```

Passing Objects into Functions
You can easily pass an entire object into a function. The function will receive it as a parameter and you can access its properties using standard dot notation.
```
const user = {
    username: "suraj",
    rollno: 479
}

// We use a generic parameter name like 'anyObject' so the function is reusable
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and rollno is ${anyObject.rollno}`);
}

// Passing the pre-made object
handleObject(user);

// You can also create and pass an object directly inside the function call!
handleObject({
    username: "sam",
    rollno: 368
});
```
- The "Type Safety" Trap: In plain JavaScript, the function blindly assumes the object you pass has a price property. If you accidentally pass an object where the key is prices (plural), the function won't crash, but it will print undefined. In professional environments, developers use if statements (or TypeScript) to check if the property actually exists before trying to use it.


Passing Arrays into Functions

Passing arrays works exactly the same way as passing objects. The function takes the array as a parameter, and you extract what you need using standard bracket indexing.
```
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // Grabs the second item (index 1)
}

console.log(returnSecondValue(myNewArray)); // Outputs: 400
```

Summary & Takeaways
- Use the Rest Operator (...) in your function parameters when you don't know how many arguments the user will pass.
- The Rest operator always bundles incoming loose arguments into an Array.
- If you mix standard parameters with a Rest parameter (val1, val2, ...rest), the Rest parameter must always be the very last one.
- When passing objects into functions, always be aware that accessing a missing or misspelled property will result in undefined.
