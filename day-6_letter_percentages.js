// Lettercase Percentage Ratio

// Write a function that takes a string, and returns an object containing the
// following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Examples:

// letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Understand the Problem:
// Input: string
// Output: object that has percentage of letters
// Rules:
//  - percentage = character of kind count / total characters * 100
//  - letter types:
//    - lowercase letters
//    - uppercase letters
//    - neither = any non-alphabet characters
//    - should you count space?

// Algorithm:
// - create three variables: uppercaseCount, lowercaseCount, neitherCount
//   - initialise with 0;
// - iterate over the string:
//   - if char is uppercase increment uppercase variable
//   - if char is lowercase increment lowercase variable
//   - if char is neither increment neither variable
// - return an object:
//   - keys = uppercase, lowercase, neither
//   - value = variable value / string length * 100 as a string in 2 decimal place

// Code
function letterPercentages(string) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let neitherCount = 0;
  let totalCharsCount = string.length;

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char >= 'A' && char <= 'Z') {
      uppercaseCount += 1;
    } else if (char >= 'a' && char <= 'z') {
      lowercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  }

  return {
    uppercase: getPercentage(uppercaseCount, totalCharsCount),
    lowercase: getPercentage(lowercaseCount, totalCharsCount),
    neither: getPercentage(neitherCount, totalCharsCount)
  }
}

function getPercentage(fraction, total) {
  return (fraction / total * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Using regex
function letterPercentages2(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi),
  };
}