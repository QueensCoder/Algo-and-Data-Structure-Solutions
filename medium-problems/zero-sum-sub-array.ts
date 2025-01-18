// brute force solution O(n^2) time, O(1) space
export function zeroSumSubarray(nums: number[]) {
  if (nums.includes(0)) return true;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum === 0) return true;
    }
  }
  return false;
}

// console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));

// O(n) time, O(n) space, looking at this if a number is ever seen twice that means the nums between the cycles zero'd out
export const zeroSumSubarrayOptimal = (nums: number[]) => {
  const sums: number[] = [];
  let sum = 0;
  const seen = new Set();

  if (nums.includes(0)) return true;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    sum += num;
    sums.push(sum);
    if (seen.has(sum)) return true;
    else seen.add(sum);
  }
  return false;
};

console.log(zeroSumSubarrayOptimal([-5, -5, 2, 3, -2]));
console.log(zeroSumSubarrayOptimal([2, -2]));
