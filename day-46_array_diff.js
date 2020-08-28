// Description:

// Your goal in this kata is to implement a difference function, which subtracts
// one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from
// the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let aCopy = a.slice();
  for (let index = 0; index < b.length; index += 1) {
    let currentValue = b[index];
    while (aCopy.includes(currentValue)) {
      aCopy.splice(aCopy.indexOf(currentValue), 1);
    }
  }

  return aCopy;
}

// using filter
function arrayDiff2(a, b) {
  return a.filter((ele) => !b.includes(ele));
}

console.log(arrayDiff([1, 2], [1])); // [2], "a was [1,2], b was [1]")
console.log(arrayDiff([1, 2, 2], [1])); // [2,2], "a was [1,2,2], b was [1]")
console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]")
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2], "a was [1,2,2], b was []")
console.log(arrayDiff([], [1, 2])); // [], "a was [], b was [1,2]")
