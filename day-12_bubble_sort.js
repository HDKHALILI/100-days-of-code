// Understanding the Problem:
// Input: list
// Output: is sorted list small to big

// Algorithm:
// - declare noSwap = false
// - loop untill noSwap is false
//    - swaps = [] -> boolean if swaped or not
//    - loop until counter is the equal to array length
//      - check if current value is greater than next value
//         if yes set current index value to be next value
//          push true to swap
//         else push false to swap
//      end loop
//      if every item of swaps is true set noSwapt to true
//      swaps = []

function bubbleSort(array) {
  let length = array.length;
  while (true) {
    let swaped = false;
    for (let index = 0; index <= length - 1; index += 1) {
      let current = array[index];
      let next = array[index + 1];

      if (current > next) {
        array[index] = next;
        array[index + 1] = current;
        swaped = true;
      }
    }
    length -= 1;

    if (!swaped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
