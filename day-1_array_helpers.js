// TODO
Array.prototype.square = function () {
  let result = [];
  this.forEach(num => result.push(num * num))
  return result;
}

Array.prototype.cube = function () {
  let result = [];
  this.forEach(num => result.push(num * num * num))
  return result;
}

Array.prototype.sum = function () {
  return this.reduce((sum, num) => sum + num, 0);
}

Array.prototype.average = function () {
  return this.sum() / this.length;
}

Array.prototype.even = function () {
  let result = [];
  this.forEach(num => {
    if (num % 2 === 0) {
      result.push(num);
    }
  })
  return result;
}

Array.prototype.odd = function () {
  let result = [];
  this.forEach(num => {
    if (num % 2 === 1) {
      result.push(num);
    }
  })
  return result;
}

// Test Cases
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.square()) // => [1, 4, 9, 16, 25];
console.log(numbers.cube()) // => [1, 8, 27, 64, 125];
console.log(numbers.sum()) // 15;
console.log(numbers.average()) // => 3;
console.log(numbers.even()) // => [2, 4];
console.log(numbers.odd()) // => [1, 3, 5];