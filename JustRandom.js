
// loop in the original properties of the array


// there are some additional properties inserted by using the protype of array
// ignore the properties injected by prototyping
// and loop in tyhe original properties of the array

Array.prototype.extraProp = "SURAJ";

let newarr = [10, 20, 30, 40, 50];

for (let v in newarr)
{
  console.log(v);
}

