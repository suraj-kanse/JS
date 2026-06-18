

String Methods

When you define a string, JavaScript automatically attaches dozens of hidden functions (methods) to it via its Prototype. You don't need to memorize them all, but you must know how to use the common ones.
Note: Because strings are primitive data types (stored in Stack memory), these methods do not alter the original string. They return a brand new copy.

1. Accessing Characters & Length

Name.length: Returns the total number of characters.

Name[0]: Accesses the first character (strings are zero-indexed).

Name.charAt(2): Finds the character at a specific index.

Name.indexOf('t'): Finds the index number of a specific character.

2. Formatting Text

Name.toUpperCase(): Converts the entire string to uppercase.

Name.toLowerCase(): Converts the entire string to lowercase.

3. Extracting Parts of a String

substring(start, end): Extracts characters between two indices. It ignores negative numbers (treats them as 0). Note: The end index is NOT included in the final output.

slice(start, end): Similar to substring, but it accepts negative values which allows you to start extracting from the end of the string backwards.

```
const name = new String('suraj-k');

const newString = name.substring(0, 4);
console.log(newString); // Outputs: "sura" (Indices 0, 1, 2, 3)

const anotherString = name.slice(-8, 4); // Slicing from the reverse
```

4. Sanitizing Data (Trimming Space)
When users fill out forms (like an email input), they accidentally add spaces. You must clean this data before sending it to a database.

trim(): Removes leading and trailing whitespace. (You can also use trimStart() or trimEnd()).

```
const newStringOne = "   suraj    ";
console.log(newStringOne.trim()); // Outputs: "suraj"
```


5. Replacing and Searching
URLs cannot contain empty spaces. Browsers often convert spaces into messy codes like %20.

replace(searchFor, replaceWith): Swaps out a specific value.

includes(keyword): Returns a boolean (true/false) if the string contains the keyword.
```
const url = "https://suraj.com/suraj%20kanse";

// Let's clean up the URL
console.log(url.replace('%20', '-')); // Outputs: "https://suraj.com/suraj-kanse"

// Does the URL contain a specific word?
console.log(url.includes('girlfriend')); // Outputs: false
```

6. Converting a String into an Array
Sometimes you have a long string separated by dashes or commas, and you want to turn it into an array (list) of separate words.

split(separator): Divides a string into an ordered list based on a specific character.
```
const name = "suraj-sk-com";
console.log(name.split('-')); // Outputs: ["suraj", "sk", "com"]
```

Quick Summary-
Stop using + to build strings. Start using backticks `` and ${}.

Remember that string methods return a new value; they do not overwrite the original variable.

Tips: explore the MDN documentation. and there are many more string operations are there You don't have to learn them all, just know they exist!
