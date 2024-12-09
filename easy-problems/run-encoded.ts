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
  // Write your code here.
  return string;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'), '9A4A2B4C2D');
console.log(runLengthEncoding('aA'), '1a1A');
