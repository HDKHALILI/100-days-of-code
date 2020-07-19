// You are the "computer expert" of a local Athletic Association (C.A.A.).
// Many teams of runners come to compete. Each time you get a string of all
// race results of every team who has run. For example here is a string showing
// the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour,
// m for minutes, s for seconds) are positive or null integer (represented as
// strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three
// statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7}
// the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set
// and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half
// of a data sample from the lower half. The median of a finite list of numbers
// can be found by arranging all the observations from lowest value to highest
// value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5)
// when there is an odd number of observations. If there is an even number of
// observations, then there is no single middle value; the median is then
// defined to be the mean of the two middle values (the median of {3, 5, 6, 9}
// is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given
// above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form:

// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:

// if a result in seconds is ab.xy... it will be given truncated as ab.

// if the given string is "" you will return ""

// Understanding the Problem:
// Input: string containing hours|minutes|seconds
// Output: string
// Rules:
// - output should be made of:
//    - range
//    - average
//    - median

// Data structure:
// Input: array

// Algorithm:
// - split the string using the pipe character (,)
// - create an empty array minutesArray
// - iterate over the string array
//    - convert to minutes and add to array
// - range = getRange(minutesArray)
// - average =  getAverage(minutesArray)
// - median = getMedian(minutesArrat)

// getRange:
// - lowest = smallest time in minutesArray
// - highest = biggest time in minutesArray
//  - reteurn highest - lowest

// getAverage():
//  sum / length

// getMedian():
// - if arr length is odd return arr[length / 2]
// - if even length return two middle index value sumed and divided by 2

//  convert to minutes function
//    - split element using (|)
//    - convert all times to minutes and sum them

//  formateTime function
//    - hour = totalMinutes / 60
//    - minutes = faction of hour * 60
//    - seconds = fraction of the minute * 60

// Code
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;

function stat(strg) {
  if (strg === "") return "";

  let timeInSeconds = convertToSeconds(strg);
  let range = formateTime(getRange(timeInSeconds));
  let average = formateTime(getAverage(timeInSeconds));
  let median = formateTime(getMedian(timeInSeconds));

  return `Range: ${range} Average: ${average} Median: ${median}`;
}

function convertToSeconds(string) {
  return string.split(",").map((time) => {
    let [hours, minutes, seconds] = time.split("|").map((val) => Number(val));
    return hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds;
  });
}

function getRange(array) {
  return Math.max(...array) - Math.min(...array);
}

function getAverage(array) {
  return array.reduce((sum, num) => sum + num) / array.length;
}

function getMedian(array) {
  array = array.slice().sort((a, b) => a - b);
  let length = array.length;
  if (length % 2 === 1) {
    let middleIndex = Math.floor(length / 2);
    return array[middleIndex];
  }

  let left = length / 2 - 1;
  return array.slice(left, left + 2).reduce((sum, num) => sum + num) / 2;
}

function formateTime(timeInSeconds) {
  let hours = Math.floor(timeInSeconds / SECONDS_IN_HOUR);
  let minutes = Math.floor(
    (timeInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE
  );
  let seconds = Math.floor(
    (timeInSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE
  );

  return `${leadingZero(hours)}|${leadingZero(minutes)}|${leadingZero(
    seconds
  )}`;
}

function leadingZero(num) {
  return num < 10 ? `0${num}` : String(num);
}
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
console.log(
  stat(
    "11|15|59, 10|16|16, 12|17|20, 9|22|34, 13|19|34, 11|15|17, 11|22|00, 10|26|37, 12|17|48, 9|16|30, 12|20|14, 11|25|11"
  )
);
// 'Range: 04|03|04 Average: 11|14|36 Median: 11|18|59
