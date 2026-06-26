Object Destructuring (The React Superpower)
- Destructuring allows you to unpack values from an object and assign them to distinct variables in a single line. 
- Instead of writing objectName.propertyName over and over again, you do it once.
```
const company = {
    companyname: "Im very bad at naming!(Soorrie!)",
    sharesprice: 999,
    companyDirector: "suraj"
}

// The old, repetitive way
console.log(company.companyDirector); 

// The Destructuring way
// Syntax: const { whatYouWantToExtract } = fromWhichObject
const { companyDirector } = company;

console.log(companyDirector); // Outputs: "suraj"
```

Renaming during Destructuring
- Sometimes, API keys or object property names are way too long (like companyDirector). You can instantly rename them while destructuring by using a colon : .
```
// Extract 'companyDirector', but immediately rename it to 'director'
const { companyDirector: director } = company;

console.log(director); // Outputs: "suraj"
```

An Insight on React: If you ever look at React code and see ({ company, name }) inside a function parameter instead of (props), that is exactly what Object Destructuring is! React developers use this constantly to avoid typing props.company and props.name.

The Basics of JSON & APIs
When you ask a backend server for data (like asking a restaurant kitchen for a samosa), the data is returned to you as an API response. Today, 99% of modern APIs return this data in a format called JSON.

What does JSON look like?
JSON looks exactly like a JavaScript object, with two massive differences:

The object itself has no name (it's not assigned to a variable like const user = {}).

Both the Keys AND the Values must be wrapped in double quotes " " (unless the value is a number or boolean).
```
// Example of raw JSON data
{
    "name": "suraj",
    "companyname": "AVCOE",
    "year": "finalYear"
}
```

How JSON is Delivered

JSON can come in two primary structures when you hit an API (like the GitHub API or RandomUser API):
- A Single Object: { "name": "suraj", "id": 123 }
- An Array of Objects: [ {}, {}, {} ]

When you receive a massive, unreadable wall of JSON text from an API, always copy/paste it into an online tool like JSON Formatter so you can visually understand if it's an Array or an Object, and figure out how to write your loops to extract the data.

Summary & Takeaways

- Destructuring (const { key } = object) is syntactic sugar to cleanly pull data out of objects.
- You can rename variables while destructuring using a colon (const { oldName: newName } = object).
- JSON is the universal format for API data transfer.
- JSON is just a JavaScript object where both the keys and the string values must be in double quotes.
- Always use a JSON Formatter tool when inspecting new APIs so you know if you are dealing with a root Object or a root Array.

