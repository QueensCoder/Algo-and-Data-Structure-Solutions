// brute force solution O(n) time , O(n) space
export function majorityElement(array: number[]) {
  const counts: { [key: string]: number } = {};
  array.forEach((num) => {
    counts[num] = counts[num] + 1 || 1;
  });

  for (let key in counts) {
    let count = counts[key];
    if (count > array.length / 2) return parseInt(key);
  }
  return counts;
}

console.log(majorityElement([2, 2, 2, 2, 1]));
console.log(majorityElement([2, 2, 1, 1]));
