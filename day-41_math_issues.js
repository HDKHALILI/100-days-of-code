// Math Issues

// Description:

// Oh no, our Math object was "accidently" reset. Can you re-implement some of
// those functions? We can assure, that only non-negative numbers are passed as
// arguments. So you don't have to consider things like undefined, null, NaN,
// negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

function round(number) {
  return floor(number + 0.5);
}

function ceil(number) {
  return Number.isInteger(number) ? number : floor(number + 1);
}

function floor(number) {
  return Number(String(number).split(".")[0]);
}

console.log(floor(0.4));
console.log(ceil(0.5));
console.log(round(0.4));
console.log(round(0.5));
