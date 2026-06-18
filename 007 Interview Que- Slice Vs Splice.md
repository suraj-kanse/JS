
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
