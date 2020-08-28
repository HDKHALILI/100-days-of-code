function arrayDiff(a, b) {
  let aCopy = a.slice();
  for (let index = 0; index < b.length; index += 1) {
    let currentValue = b[index];
    while (aCopy.includes(currentValue)) {
      aCopy.splice(aCopy.indexOf(currentValue), 1);
    }
  }

  return aCopy;
}
