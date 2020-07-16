// You are given a secret message you need to decipher. Here are the things you
// need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// Understanding the Problem:
// Input:
//  - coded string
//  - no special characters
// Output: deciphered string
// Rules:
//  input's:
//   - first letter is the character code
//   - the second and last letters are switched

// Code
function replaceCodeWithChar(word) {
  let charCode = parseInt(word, 10);
  return word.replace(charCode, String.fromCharCode(charCode));
}

function swapIndexValues(word, firstIndex, secondIndex) {
  return word = word.split('').map((char, index) => {

    if (index === firstIndex) {
      return word[secondIndex]
    } else if (index === secondIndex) {
      return word[firstIndex]
    }

    return char;

  }).join('');
}

function decipherThis(str) {
  return str.split(' ').map(word => {
    word = replaceCodeWithChar(word);

    if (word.length > 2) {
      return swapIndexValues(word, 1, word.length - 1);
    }

    return word;

  }).join(' ');
}


console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
// 'Have a go at this and see how you do')
