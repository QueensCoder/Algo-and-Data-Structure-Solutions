export function sortedSquaredArrayBruteForce(array: number[]) {
  return array.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

// console.log(sortedSquaredArrayBruteForce([0, 5, 10])); // [0, 25, 100]
// console.log(sortedSquaredArrayBruteForce([-3, -2, -1])); // [1, 4, 9]

// O(n) time | O(n) space

/**
 *
 * Approach
 * Examine upper and lower bounds of the array
 * if the absolute value of the upper bound is less than the lower bound, square the lower bound and add to the result
 * move the lower bound up by 1
 * if the absolute value of the lower bound is less than or equal to the upper bound, square the upper bound and add to the result
 * move the upper bound down by 1
 * to place each squared value in the correct position, we use the upper bound - lower bound as the index
 * in the case of -3, -2, -1, the squared values are 1, 4, 9
 * the result array is [1, 4, 9]
 * ABS(-3) > ABS(-1) so we square -3, add to the result and move the lower bound up by 1
 * upperBound - lowerBound = 2 - 0 = 2, therefore the squared value of -3 is placed at index 2
 * ABS(-2) < ABS(-1) so we square -2, add to the result and move the lower bound up by 1
 * upperBound - lowerBound = 2 - 1 = 1, therefore the squared value of -2 is placed at index 1
 * ABS(-1) <= ABS(-1) so we square -1, add to the result and move the lower bound up by 1
 * upperBound - lowerBound = 2 - 2 = 0, therefore the squared value of -1 is placed at index 0
 */

export function sortedSquaredArray(array: number[]) {
  let upperBound = array.length - 1;
  let lowerBound = 0;

  const result: number[] = [];

  while (upperBound >= lowerBound) {
    const upperValue = array[upperBound];
    const lowerValue = array[lowerBound];

    const upperABS = Math.abs(upperValue);
    const lowerABS = Math.abs(lowerValue);

    if (upperABS < lowerABS) {
      result[upperBound - lowerBound] = Math.pow(lowerABS, 2);
      lowerBound++;
    } else if (lowerABS <= upperABS) {
      result[upperBound - lowerBound] = Math.pow(upperABS, 2);
      upperBound--;
    }
  }

  return result;
}

// console.log(sortedSquaredArray([0, 5, 10])); // [0, 25, 100]
console.log(sortedSquaredArray([-3, -2, -1])); // [1, 4, 9]
console.log('hello');
