// Tri-Angles

// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments
// are in degrees.

// Examples:

// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"

// Understand the Problem:
// Input: 3 whole numbers repesenting 3 angles of a triangle
// Output: 'acute', 'right', 'obtuse', or 'invalid'
// Rules:
//  - valid triangle:
//    - all angles must be greater than 0
//    - sum of all angles must exactly 180
// - types of angles:
//   - right: one angle is exactly 90 degrees
//   - acute: all three angles are less than 90 degrees
//   - obtuse: one angle is greater than 90 degrees

// Data Structures:
// Input: integers and array
// Output: string

// Algorithm:
// - determine if triangle is valid
//   - every angles are greater than 0 and sum of angles is 180
// - if invalid return 'invalid'
// - if one angle is 90 return 'right'
// - if one angle is greater than 90 return 'obtuse'
// - if all angle is less than 90 return 'acute'

// Code
function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (isValidTriangle(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValidTriangle(angles) {
  let allAnglesGreaterThanZero = angles.every((angle) => angle > 0);
  let anglesSum = angles.reduce((sum, angle) => sum + angle);

  return allAnglesGreaterThanZero && anglesSum === 180;
}

function getTriangleType(angles) {
  let right = angles.some((angle) => angle === 90);
  let acute = angles.every((angle) => angle < 90);
  if (right) {
    return "right";
  } else if (acute) {
    return "acute";
  } else {
    return "obtuse";
  }
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
