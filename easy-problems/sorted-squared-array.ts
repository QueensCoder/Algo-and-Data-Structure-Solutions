export function sortedSquaredArrayBruteForce(array: number[]) {
  return array.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}

// console.log(sortedSquaredArrayBruteForce([0, 5, 10])); // [0, 25, 100]
// console.log(sortedSquaredArrayBruteForce([-3, -2, -1])); // [1, 4, 9]

export function sortedSquaredArray(array: number[]) {
  let upperBound = array.length - 1;
  let lowerBound = 0;
  const result = Array(array.length).fill(0);

  console.log(array[upperBound], array[lowerBound]);
  while (upperBound >= lowerBound) {
    const upperValue = array[upperBound];
    const lowerValue = array[lowerBound];

    const upperAbsValue = Math.abs(upperValue);
    const lowerAbsValue = Math.abs(lowerValue);

    console.log(upperAbsValue, lowerAbsValue);

    if (upperAbsValue >= lowerAbsValue) {
      console.log('got here');
      result[upperBound] = Math.pow(upperValue, 2);
      upperBound--;
    } else if (upperAbsValue < lowerAbsValue) {
      console.log('got here2');
      result[upperBound] = Math.pow(lowerValue, 2);
      lowerBound++;
    }
  }

  return result;
}

// console.log(sortedSquaredArray([0, 5, 10])); // [0, 25, 100]
console.log(sortedSquaredArray([-3, -2, -1])); // [1, 4, 9]
console.log('hello');
