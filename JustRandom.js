
// loop in the original properties of the array


// there are some additional properties inserted by using the protype of array
// ignore the properties injected by prototyping
// and loop in tyhe original properties of the array

Array.prototype.extraProp = "SURAJ";
Array.prototype.extraProperty2 = "KANSE";

const newarr = [10, 20, 30, 40, 50];
console.log(newarr);

for (let i in newarr)
{
  console.log(i)
}

for (let i in newarr)
{
  if (newarr.hasOwnProperty(i))    // protype values doesn't have hasownProperty = true
  {
        console.log(i);
  }
}

