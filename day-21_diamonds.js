// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
//  that the argument will always be an odd integer.

function diamond(n) {
  let middle = Math.ceil(n / 2);
  let numOfSpaces = middle - 1;
  let numOfStars = 1;
  for (let counter = 1; counter <= n; counter += 1) {
    console.log(`${" ".repeat(numOfSpaces)}${"*".repeat(numOfStars)}`);
    if (counter >= middle) {
      numOfSpaces += 1;
      numOfStars -= 2;
    } else {
      numOfSpaces -= 1;
      numOfStars += 2;
    }
  }
}

// Example / Test Cases:

console.log(diamond(1));
// logs
// *

console.log(diamond(3));
// logs
/*
 *
 ***
 *
 */
console.log(diamond(9));
// logs
/*
 *
 ***
 *****
 *******
 *********
 *******
 *****
 ***
 *
 */
