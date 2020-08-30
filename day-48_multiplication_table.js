// Understanding the Problem:
// Input: positive integer
// Output: an array of input numbers of array of input size
// Rules:
// - create NxN multiplication table of a given size
// - example:
//  - size = 3
//  - => [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

// Algorithm:
// - set an empty table array
// - set outerCounter to 1
// - start a loop that runs n number of times
//  - set an empty row array
//  - set innerCounter to 1
//  - start another loop that also runs n number of times
//    - mutliple the outerCounter with innerCounter and add it to row array
//    - increment innerCounter by 1
//  - end loop
//  - add row to table array
//  - increment ounterCounter by 1
// - end loop
// - return table

// Code
function multiplicationTable(size) {
  const table = [];
  for (let outerCounter = 1; outerCounter <= size; outerCounter += 1) {
    const row = [];
    for (let innerCounter = 1; innerCounter <= size; innerCounter += 1) {
      row.push(outerCounter * innerCounter);
    }

    table.push(row);
  }

  return table;
}

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
