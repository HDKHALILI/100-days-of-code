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
  let substrings = s.split(/[aeiou]+/);

  let sumConsonantValues = substrings.map((substring) => {
    return [...substring].reduce(
      (sum, char) => sum + char.charCodeAt() - 96,
      0
    );
  });

  return Math.max(...sumConsonantValues);
}

console.log(solve("zodiac")); // 26
console.log(solve("strength")); // 57
