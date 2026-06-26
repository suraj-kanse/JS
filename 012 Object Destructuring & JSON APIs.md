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
