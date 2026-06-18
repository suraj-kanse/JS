When working with arrays in the real world (especially when dealing with APIs or scraping web data), you rarely just add or remove single items. You frequently need to merge multiple arrays, untangle deeply nested arrays, or convert weird data structures into clean arrays. Mastering these advanced methods will save you from major headaches and messy code.

🧩 The Problem with Merging Arrays using push()
A common mistake beginners make is trying to combine two arrays using push().

Because JavaScript arrays can hold any data type, if you push an array into another array, it doesn't merge the items. Instead, it treats the entire second array as a single object and drops it inside.
```
const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// (Bad Practice)- This nests the array instead of merging it
marvelHeroes.push(dcHeroes); 
console.log(marvelHeroes); 
// Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]
```
