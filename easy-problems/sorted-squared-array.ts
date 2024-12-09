export function sortedSquaredArrayBruteForce(array: number[]) {
  return array.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

// console.log(sortedSquaredArrayBruteForce([0, 5, 10])); // [0, 25, 100]
// console.log(sortedSquaredArrayBruteForce([-3, -2, -1])); // [1, 4, 9]

// O(n) time | O(n) space

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
