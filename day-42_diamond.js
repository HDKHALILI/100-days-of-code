// Give me a Diamond

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants
// a diamond string from James. Since James doesn't know how to make this
// happen, he needs your help.

// Task

// You need to return a string that looks like a diamond shape when printed on
// the screen, using asterisk (*) characters. Trailing spaces should be removed,
// and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is
// not possible to print a diamond of even or negative size.

// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

// *
//  ***
// *****
//  ***
// *

// ...that is: " *\n ***\n*****\n ***\n *\n"

function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let diam = "";
  let middle = Math.ceil(n / 2);
  let numOfSpaces = middle - 1;
  let numOfStars = 1;
  for (let counter = 1; counter <= n; counter += 1) {
    diam += `${" ".repeat(numOfSpaces)}${"*".repeat(numOfStars)}\n`;
    if (counter >= middle) {
      numOfSpaces += 1;
      numOfStars -= 2;
    } else {
      numOfSpaces -= 1;
      numOfStars += 2;
    }
  }

  return diam;
}

console.log(diamond(5));
// console.log(diamond(5));
