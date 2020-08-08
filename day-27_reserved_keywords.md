Reserved Keywords

We have been asked to implement a function that determines whether or not a given word is a reserved keyword. We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

```javascript
const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach((reserved) => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // should be: true
```

The problem is using `forEach`, it deosn't care about the return value of the `callback`, it always return `undefined` at the end of the loop.  
If we care about the return value of `callback` we shouldn't use `forEach`.  
One way to correct the code is to use `Array.prototype.includes`:

```javascript
const RESERVED_KEYWORDS = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
];

function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}

console.log(isReserved("monkey")); // false
console.log(isReserved("patch")); // false
console.log(isReserved("switch")); // true
```
