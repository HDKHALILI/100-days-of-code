// Consonant value

// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings. Consonants are any letters
// of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get:
// "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26,
// d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with valu

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
