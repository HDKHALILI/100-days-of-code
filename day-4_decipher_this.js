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

function decipherThis(str) {
  let deciphered = [];
  str.split(' ').forEach(word => {
    let charCode = parseInt(word, 10);
    word = String.fromCharCode(charCode) + word.replace(/[0-9]/g, '');
    word = word.split('');
    let secondChar = word[1];
    let lastChar = word[word.length - 1];
    word.splice(1, 1, lastChar);
    word.splice(word.length - 1, 1, secondChar);
    deciphered.push(word.join(''));
  });

  return deciphered.join(' ');
}


// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
// 'Have a go at this and see how you do')
