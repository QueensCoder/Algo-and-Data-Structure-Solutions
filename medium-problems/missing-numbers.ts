// O(nlogn) time, O(n) space
export function missingNumbers(nums: number[]) {
  if (!nums.length) return [1, 2];
  if (nums.length === 1) {
    const firstThree = [1, 2, 3];

    const solo = nums[0];
    return firstThree.filter((num) => num !== solo);
  }

  nums.sort((a, b) => a - b);

  let start = 1;
  let end = nums[nums.length - 1] + 2;
  const result: number[] = [];

  const visited = new Set(nums);
  while (start <= end) {
    if (result.length === 2) return result;
    if (!visited.has(start)) result.push(start);
    start++;
  }

  return result;
}

console.log(missingNumbers([]));
console.log(missingNumbers([1]));
console.log(missingNumbers([1, 4, 3]));
console.log(
  missingNumbers([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ]),
);
