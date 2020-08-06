function buildStarRow(spacesBetween, spacesRight) {
  let asterisks = ["*", "*", "*"];
  let starRow = asterisks.join(" ".repeat(spacesBetween));
  let rightPaddedStars = " ".repeat(spacesRight) + starRow;
  return rightPaddedStars;
}

function buildStarRows(size) {
  let spacesBetween = (size - 3) / 2;
  let middle = Math.floor(size / 2);
  const firstHalf = [];
  for (let index = 0; index < middle; index += 1) {
    firstHalf.push(buildStarRow(spacesBetween - index, index));
  }
  return [...firstHalf, "*".repeat(size), ...firstHalf.reverse()];
}

function star(size) {
  let starRows = buildStarRows(size);
  starRows.forEach((row) => console.log(row));
}

star(7);
console.log("--------------");
star(9);
