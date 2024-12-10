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
 * - 3 cases
 * 	- max count hit
 * - char changes
 * - end of string
 *  must do char change check first just in case we hit max count + char change and miss the char change to both occuring
 */

export function runLengthEncoding(string: string) {
  let runLengthEncoding = '';
  const MAX_COUNT = 9;

  let currCount = 0;

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let lastChar = string[i - 1];

    //   char changes
    if (lastChar && lastChar !== currChar) {
      let encodedPart = `${currCount}${lastChar}`;
      runLengthEncoding += encodedPart;
      currCount = 0;
      // max size hit
    } else if (lastChar && currCount === MAX_COUNT) {
      let encodedPart = `${currCount}${currChar}`;
      runLengthEncoding += encodedPart;
      currCount = 0;
    }

    // end of string
    if (i === string.length - 1) {
      runLengthEncoding += `${currCount + 1}${currChar}`;
    }

    currCount++;
  }
  return runLengthEncoding;
}

// console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'), '9A4A2B4C2D');
// console.log(runLengthEncoding('aA'), '1a1A');
console.log(
  runLengthEncoding('........______=========AAAA   AAABBBB   BBB'),
  '8.6_9=4A3 3A4B3 3B',
);

console.log(runLengthEncoding('A===AAAA')); //8.6_9=4A3 3A4B3 3B
// ===AAAA
