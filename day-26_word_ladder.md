Word Ladder

Gemma and some friends are working on a complex program to generate word ladders, transforming one word into another word one character at a time. The smallest of her tasks is to print the resulting ladder to the screen.

A "ladder" is simply an array of word strings; Gemma decides to transform this array into a single string where each word within the string is separated by a hyphen (`'-'`). For example, the array `['pig', 'pie', 'lie', 'lit', 'let']` should be printed as the string `'pig-pie-lie-lit-let'`.

Upon first glance, Gemma's code below looks like it should work. But it throws a TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

```javascript
let ladder = ""[("head", "heal", "teal", "tell", "tall", "tail")].forEach(
  (word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  }
);

console.log(ladder); // expect: head-heal-teal-tell-tall-tail
```

Why the error:  
The statement `let ladder = ''` is missing a semicolon (`;`). JavaScript's _Automatic Semicolon Insertion_ join the `['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach()` with the `let` statement like this: `let laddeer = ''['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach()`. Now the code is trying to access a property on empty string, as none exist and returns `undefined` and calling `forEach` on `undefined` produces the error.  
Correted Code. There are other places that are missing a semicolon, but those do not produce the error. _Always use semicolon where appropriate_

```javascript
let ladder = ""; // semicolon was missing

["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
  if (ladder !== "") {
    ladder += "-"; // added semicolon for best practice
  }

  ladder += word; // added semicolon for best practice
}); // added semicolon for best practice

// added semicolon for best practice
console.log(ladder); // expect: head-heal-teal-tell-tall-tail
```
