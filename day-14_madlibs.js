// Madlibs Revisited

// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text "template" as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the
// text and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text templates. Choose the right way to
// structure your templates and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something
// that you'll define for yourself.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them there without quotes.

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly

// madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

function madlibs(template) {
  let wordsArray = template.split(" ");
  let categories = ["$adjective", "$noun", "$adverb", "$verb"];
  wordsArray.forEach((word, index) => {
    let justWord = wordAndPunctuation(word)[0];
    if (categories.includes(justWord)) {
      word =
        randomWord(cleanWord(justWord) + "s") + wordAndPunctuation(word)[1];
      wordsArray.splice(index, 1, word);
    }
  });

  return wordsArray.join(" ");
}

function cleanWord(word) {
  return word.slice(1);
}

function randomWord(category) {
  let categories = {
    adjectives: ["quick", "lazy", "sleepy", "noisy", "hungary"],
    nouns: ["fox", "dog", "head", "leg", "tail", "cat"],
    verbs: ["jumps", "lifts", "bites", "licks", "pats"],
    adverbs: ["easily", "lazily", "noisily", "excitedly"],
  };

  let randomIndex = Math.floor(Math.random() * categories[category].length);
  return categories[category][randomIndex];
}

function wordAndPunctuation(word) {
  let punctuations = [",", "'", "!", "."];
  let result = [];
  word.split("").forEach((char, index) => {
    if (punctuations.includes(char)) {
      result.push(word.slice(0, index), word.slice(index));
    }
  });

  if (result.length === 0) {
    result.push(word, "");
  }

  return result;
}

let template1 =
  "The $adjective brown $noun $adverb $verb the $adjective yellow $noun, who $adverb $verb his $noun and looks around.";

console.log(madlibs(template1));
console.log(madlibs(template1));

let template2 = "The $noun $verb the $noun's $noun.";
console.log(madlibs(template2));
console.log(madlibs(template2));
