// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occuring exactly once each.
// For example, 49 is a featured number, but 98 is not (it is not odd), 97 is
// not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next
// featured number greater than the integer. Issue an error message if there
// is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirement

// Code
function featured(number) {
  const MAX_FEATURED = 9876543201;
  // why not 7?
  //  featuredNumber is odd if we add odd to and odd number we will get even number
  //  we want is the next odd, there for the next even and multiple of 7 is 14
  const NEXT_MULTIPLE_OF_7 = 14;
  let featuredNumber = oddAndMultipleOf7(number);
  while (featuredNumber < MAX_FEATURED) {
    if (noDuplicate(featuredNumber)) {
      return featuredNumber;
    }
    featuredNumber += NEXT_MULTIPLE_OF_7;
  }

  return "There is no possible number that fulfills those requirnments.";
}

function oddAndMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);
  console.log(number);
  return number;
}

function noDuplicate(number) {
  let occurencies = {};
  String(number)
    .split("")
    .forEach((num) => {
      occurencies[num] = occurencies[num] || 0;
      occurencies[num] += 1;
    });

  return !Object.values(occurencies).some((value) => value > 1);
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543201)); // error
