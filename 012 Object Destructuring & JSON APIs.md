Object Destructuring (The React Superpower)
- Destructuring allows you to unpack values from an object and assign them to distinct variables in a single line. 
- Instead of writing objectName.propertyName over and over again, you do it once.
```
const company = {
    companyname: "JS in Hindi",
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
