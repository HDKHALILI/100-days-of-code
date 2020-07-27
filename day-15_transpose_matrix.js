// Transpose 3x3 Matrix

// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix. For example, the transposition of
// the matrix is:
/*
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
=>
  1  4  3
  5  7  9
  8  2  6
*/

// Write a function that takes an array of arrays representing a 3x3 matrix,
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce
// a new matrix and leave the input matrix array unchanged.

function transpose(matrix) {
  let newMatrix = [];
  for (let outerIndex = 0; outerIndex < matrix.length; outerIndex += 1) {
    newMatrix.push([]);
    for (let innerIndex = 0; innerIndex < 3; innerIndex += 1) {
      newMatrix[outerIndex].push(matrix[innerIndex][outerIndex]);
    }
  }

  return newMatrix;
}

// Solution Using map
function transpose2(matrix) {
  return matrix.map((subArray, rowId) =>
    subArray.map((_, colId) => matrix[colId][rowId])
  );
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

let newMatrix2 = transpose2(matrix);
console.log(newMatrix2); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
