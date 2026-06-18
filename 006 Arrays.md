
ARRAYS:

Arrays in JavaScript are incredibly flexible. Unlike some older programming languages where arrays must have a fixed size and contain only one type of data, JavaScript arrays are resizable and can hold a mix of numbers, strings, booleans, objects, or even other arrays all at once.

JavaScript array-copy operations create **shallow copies**. Because arrays are Reference (Non-Primitive) data types, assigning an array to a new variable doesn't duplicate the data. If you change the new array, the original array will also change because they share the exact same address in Heap memory.

```
// Array Declarstion
// 1. Bracket Notation (Standard & Recommended)
const myArr = [0, 1, 2, 3, 4, 5];
const mixedArr = ["suraj", 1, true];

// 2. The Array Object
const myArr2 = new Array(1, 2, 3, 4);
```

🛠️ Essential Array Methods:
These are the everyday tools you'll use to add, remove, and query data inside arrays.

- push(value) & pop(): Work at the end of the array. push adds a value to the back, pop removes the last value. (These are highly optimized and fast).
```
const myArr = [10, 20, 30];
myArr.push(40);     // [10, 20, 30, 40]
myArr.pop();        // [10, 20, 30]
```

- unshift(value) & shift(): Work at the start of the array. unshift forces a value to the front, shift removes the very first value.
```
const myArr = [10, 20, 30];
myArr.unshift(9);   // [9, 10, 20, 30]
myArr.shift();      // [10, 20, 30]
```

- Insight: Try to avoid using unshift() on massive arrays. Because it forcefully adds an item to the very beginning, the computer has to recalculate and shift the index number of every single other element in the array, which drains performance.

- includes(value): Returns a simple true or false if the exact value exists in the array.
```
const myArr = [10, 20, 30];
console.log(myArr.includes("30")); // Output: true
console.log(myArr.includes("40")); // Output: false
// You can also pass a second argument to tell it where to start searching
// Start looking from index 2 onwards
console.log(myArr.includes("10", 2)); // Output: false
```

- indexOf(value): Returns the index number of a value. If the value doesn't exist, it defaults to returning -1.
```
const scores = [10, 20, 30, 40, 20];

// Finding the index of an existing item
console.log(scores.indexOf(30)); // Output: 2

// What if the element appears more than once? 
// It stops at the very first one it finds.
console.log(scores.indexOf(20)); // Output: 1

// What happens if the value doesn't exist?
console.log(scores.indexOf(99)); // Output: -1
```

- join(): Binds all the elements of an array together into a single string separated by commas. (Beware: this changes the data type from object to string).
```
const words = ["JavaScript", "is", "awesome"];

// Default behavior: glues them together with commas
console.log(words.join()); 
// Output: "JavaScript,is,awesome"

// Passing an empty string: glues them together with no space
console.log(words.join("")); 
// Output: "JavaScriptisawesome"

// Passing a specific separator (like a space or a dash)
console.log(words.join(" ")); 
// Output: "JavaScript is awesome"

console.log(words.join(" - ")); 
// Output: "JavaScript - is - awesome"
```


**Interview Question: slice() vs splice()**

This is easily one of the most heavily tested array concepts in entry-level JavaScript interviews. You must understand the difference in how they extract data and how they treat the original array.

1. slice(startIndex, endIndex)
Extracts a portion of the array.
The endIndex is not included in the output (it stops right before it).
Most importantly: It does not manipulate the original array. You are just taking a peek at a section.
```
const originalArray = [0, 1, 2, 3, 4, 5];
const sliced = originalArray.slice(1, 3);
console.log("Sliced Output:", sliced);       // Outputs: [1, 2]
console.log("Original after Slice:", originalArray); // Outputs: [0, 1, 2, 3, 4, 5] (Unchanged!)
```

2. splice(startIndex, deleteCount)
Extracts a portion of the array.
Most importantly: It mutates the original array by ripping those elements entirely out of it.
```
const originalArray = [0, 1, 2, 3, 4, 5];
const spliced = originalArray.splice(1, 3);
console.log("Spliced Output:", spliced);     // Outputs: [1, 2, 3]
console.log("Original after Splice:", originalArray); // Outputs: [0, 4, 5] (Mutated!)
```









