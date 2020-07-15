// The maximum sum subarray problem consists in finding the maximum sum of a
// contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the
//  maximum sum is the sum of the whole array. If the list is made up of
// only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty
// list or array is also a valid sublist/subarray.

// Brut Force solution
function maxSequence(arr) {
  let maxSumOfSubarray = 0;
  for (let startIndex = 0; startIndex < arr.length; startIndex += 1) {
    let currentSum = 0;
    for (let endIndex = startIndex; endIndex < arr.length; endIndex += 1) {
      currentSum += arr[endIndex];
      if (currentSum > maxSumOfSubarray) {
        maxSumOfSubarray = currentSum;
      }
    }
  }
  return maxSumOfSubarray;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]