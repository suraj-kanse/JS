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
