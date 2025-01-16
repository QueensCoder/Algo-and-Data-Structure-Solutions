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

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]));
