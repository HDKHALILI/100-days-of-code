// Story

// The Pied Piper has been enlisted to play his magical tune and coax all the
// rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task

// How many deaf rats are there?
// Legend

//     P = The Pied Piper
//     O~ = Rat going left
//     ~O = Rat going right

// Example

//     ex1 ~O~O~O~O P has 0 deaf rats

//     ex2 P O~ O~ ~O O~ has 1 deaf rat

//     ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

function countDeafRats(town) {
  let thePPIndex = town.indexOf("P");
  let ratsBeforeThePP = sliceInPairs(town.slice(0, thePPIndex));
  let ratsAfterThePP = sliceInPairs(town.slice(thePPIndex + 1));

  let deafRatsCountBefore = ratsBeforeThePP.filter((rat) => rat.endsWith("~"))
    .length;
  let deafRatsCountAfter = ratsAfterThePP.filter((rat) => rat.startsWith("~"))
    .length;

  return deafRatsCountBefore + deafRatsCountAfter;
}

function removeAllSpaces(string) {
  return string.replace(/\s+/g, "");
}

function sliceInPairs(string) {
  string = removeAllSpaces(string);
  let pairs = [];
  for (let start = 0; start <= string.length - 2; start += 2) {
    pairs.push(string.slice(start, start + 2));
  }

  return pairs;
}

function countDeafRats2(town) {
  town = removeAllSpaces(town);
  let thePPIndex = town.indexOf("P");
  let ratsBeforeThePP = town.slice(0, thePPIndex);
  let ratsAfterThePP = town.slice(thePPIndex + 1);
  let deafRatsCount = 0;

  for (let index = 0; index < ratsBeforeThePP.length; index += 2) {
    if (ratsBeforeThePP[index + 1] === `~`) {
      deafRatsCount += 1;
    }
  }

  for (let index = 0; index < ratsAfterThePP.length; index += 2) {
    if (ratsAfterThePP[index] === "~") {
      deafRatsCount += 1;
    }
  }

  return deafRatsCount;
}

function countDeafRats3(town) {
  town = removeAllSpaces(town);
  let thePPIndex = town.indexOf("P");
  let deafRatsCount = 0;

  // Deaf rats on the left of The Pied Piper
  for (let index = 1; index < thePPIndex; index += 2) {
    if (town[index] === `~`) {
      deafRatsCount += 1;
    }
  }

  // Deaf rats on the right of The Pied Piper
  for (let index = thePPIndex + 1; index < town.length; index += 2) {
    if (town[index] === "~") {
      deafRatsCount += 1;
    }
  }

  return deafRatsCount;
}

// console.log("O~~OO~~OO~~OO~ P~OO~~OO~~OO~~O"));

console.log(countDeafRats("O~~OO~~OO~~OO~ P~OO~~OO~~OO~~O")); // 8

console.log(countDeafRats("~O~O~O~OP~O~OO~")); // 2
console.log(countDeafRats("P O~ O~ ~O O~")); // 1
