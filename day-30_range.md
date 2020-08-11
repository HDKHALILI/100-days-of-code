Range

We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

```javascript
function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

Why the error?  
There are two functions with the same name (`range`), second function overrides the first one. It keeps calling itself recursively without any base condition to stop it. We get an infinit loop.  
The correct code:

```javascript
function range(start, end = -1) {
  if (end === -1) {
    end = start;
    start = 0;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```
