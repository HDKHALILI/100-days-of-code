function isBlockWord(word) {
  const blocks = [
    "BO",
    "XK",
    "DQ",
    "CP",
    "NA",
    "GT",
    "RE",
    "FS",
    "JW",
    "HU",
    "VI",
    "LY",
    "ZM",
  ];
  let charsArray = word.toUpperCase().split("");
  for (let index = 0; index < charsArray.length; index += 1) {
    let blockIndex = blocks.findIndex((block) =>
      block.includes(charsArray[index])
    );
    if (blockIndex < 0) return false;
    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
console.log(isBlockWord("floW")); // true
console.log(isBlockWord("APPLE")); // false
console.log(isBlockWord("apple")); // false
console.log(isBlockWord("apPLE")); // false
console.log(isBlockWord("Box")); // false
