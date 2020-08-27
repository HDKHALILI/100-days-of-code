function solve(s) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let substrings = getSubstrings(s);
  return substrings
    .map((substring) => {
      return substring
        .split("")
        .map((char) => alphabets.indexOf(char) + 1)
        .reduce((sum, next) => sum + next, 0);
    })
    .sort((a, b) => b - a)[0];
}

function getSubstrings(string) {
  let substrings = [];
  let start = 0;
  for (let index = 0; index <= string.length; index += 1) {
    if ("aieou".includes(string[index])) {
      substrings.push(string.slice(start, index));
      start = index + 1;
    } else if (index === string.length) {
      substrings.push(string.slice(start));
    }
  }

  return substrings;
}

console.log(getSubstrings("strength"));

console.log(solve("zodiac")); //26
console.log(solve("zodiac")); //26
