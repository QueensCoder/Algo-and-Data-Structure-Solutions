/**
 * Problem
 * - For each character in the string, turn AAA into 3A, with a maximum of 9 per character
 * - greater than 9 becomes another entry ex 12A is represented as 9A3A
 *
 * Approach
 * - Initialize an empty string to store the result
 * - for each letter in the string, store the current letter and the count, dump if 9 and add to result
 * - if char changes dump and add to result
 * - dump means remove from current count/storage and add to result string
 */

export function runLengthEncoding(string: string) {
  let runLengthEncoding = '';
  const MAX_COUNT = 9;

  let currCount = 0;

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let lastChar = string[i - 1];

    // max size hit
    if (lastChar && currCount === MAX_COUNT) {
      let encodedPart = `${currCount}${currChar}`;
      runLengthEncoding += encodedPart;
      currCount = 0;
      //   char changes
    } else if (lastChar && lastChar !== currChar) {
      let encodedPart = `${currCount}${lastChar}`;
      runLengthEncoding += encodedPart;
      currCount = 0;
      // end of string
    } else if (i === string.length - 1) {
      runLengthEncoding += `${currCount + 1}${currChar}`;
    }

    currCount++;
  }
  return runLengthEncoding;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'), '9A4A2B4C2D', '...');
// console.log(runLengthEncoding('aA'), '1a1A');
