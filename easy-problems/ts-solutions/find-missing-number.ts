// O(n) time, O(1) space
export function missingNumber(nums: number[]) {
  if (nums.length === 0) return [1];
  const totalSum = nums.reduce((a, b) => {
    a += b;
    return a;
  });
  const nth = Math.max(...nums);
  const nthPlusTwo = nth + 2;

  let idealSum = 0;
  for (let i = 1; i < nthPlusTwo; i++) {
    idealSum += i;
  }
  console.log(idealSum, totalSum);
  const difference = idealSum - totalSum;
  return [difference];
}

// console.log(missingNumber([]));
// console.log(missingNumber([1]));
console.log(missingNumber([1, 4, 3]));
// console.log(
//   missingNumber([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22,
//   ]),
// );
