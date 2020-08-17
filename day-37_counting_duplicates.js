// Understanding the Problem:
// - return how many letters are duplicated
//  for example:
//    - 'abcd' --> 0 letters are duplicated
//    - 'aabbcd' --> 2 letters are duplicated
// Input:
//  - string
//    - can contain both letters and numbers
//    - can be both uppercase and lowercase
// Ouput: number representing number of duplicates character
// Rule:
//  - do not count space
//  - if no duplicate return 0
//  - duplicate: not how many occurrence of each character
//    but how many of the characters occurs more than once.

// Algorithm:
//  - iterate over every character in the string
//    - if current character is not a space
//     - count and record occurence of each character
//  - go over the record and check how many character has occurred more than 1
//  - return the number of those characters

// Code
function duplicateCount(text) {
  let charsFrequency = {};
  for (let index = 0; index < text.length; index += 1) {
    let char = text[index].toLowerCase();
    if (char !== " ") {
      charsFrequency[char] = charsFrequency[char] || 0;
      charsFrequency[char] += 1;
    }
  }

  let allDuplicates = Object.keys(charsFrequency).filter(
    (char) => charsFrequency[char] > 1
  );
  return allDuplicates.length;
}

function duplicateCount2(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char, index, chars) => {
      return chars.indexOf(char) === index && chars.lastIndexOf(char) !== index;
    }).length;
}

// console.log(duplicateCount("")); // 0;
// console.log(duplicateCount("abcde")); // 0)
// console.log(duplicateCount("aabbcde")); //  2)
// console.log(duplicateCount("aabBcde")); // 2"should ignore case";
// console.log(duplicateCount("Indivisibility")); //  1
// console.log(duplicateCount("Indivisibilities")); //  2 "characters may not be adjacent"
console.log(duplicateCount("")); // 0;
console.log(duplicateCount2("abcde")); // 0)
console.log(duplicateCount2("aabbcde")); //  2)
console.log(duplicateCount2("aabBcde")); // 2"should ignore case";
console.log(duplicateCount2("Indivisibility")); //  1
console.log(duplicateCount2("Indivisibilities")); //  2 "characters may not be adjacent"
