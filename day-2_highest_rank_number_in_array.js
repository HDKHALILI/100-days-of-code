// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// using object and array methods
function highestRank(arr) {
  let frequency = {};
  arr.forEach(num => {
    frequency[num] = frequency[num] || 0;
    frequency[num] += 1;
  });

  let firstElement = Object.entries(frequency).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  }).shift();

  return Number(firstElement[0]);
}

// using for loops
function highestRank2(arr) {
  let highestFrequency = 1;
  let currentFrequency = 0;
  let element;

  for (let index = 0; index < arr.length; index += 1) {
    for (let compareIndex = index; compareIndex < arr.length; compareIndex += 1) {
      if (arr[index] === arr[compareIndex]) {
        currentFrequency += 1;
      }

      if (highestFrequency === currentFrequency) {
        element = Math.max(element, arr[index]);
      }

      if (highestFrequency < currentFrequency) {
        highestFrequency = currentFrequency;
        element = arr[index];
      }
    }
    currentFrequency = 0
  }

  return element;
}

let array1 = [12, 10, 8, 12, 7, 6, 4, 10, 12]; // 12
let array2 = [12, 10, 8, 12, 7, 6, 4, 10, 10]; // 10
let array3 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] // 12
let array4 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]; // 3
console.log(highestRank2(array1)); // 12
console.log(highestRank2(array2)); // 10
console.log(highestRank2(array3)); // 12
console.log(highestRank2(array4)); // 3