// Sum Square - Square Sum

// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.

// Examples:

// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// Understanding the Problem:
// Input: positive number
// Output positive number
// Rules:
//  - sum Square = sum range of 1 to and including the input and square it
//  - square sum = square every number in range of 1 to input(inclusive)
//                 and sum it
//  - find the difference of sum square and square sum

// Algorithm:
// - create variable sum = 0;
// - create variable squareSum = 0;
// - loop until the count is higher than the input
//   - add count to sum
//   - add count squared to squareSum
// - end loop
// - return sum squared - squareSum

// Code
function sumSquareDifference(count) {
  let sum = 0;
  let squareSum = 0;
  for (let number = 1; number <= count; number += 1) {
    sum += number;
    squareSum += number ** 2;
  }

  return sum ** 2 - squareSum;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
