// O(n squared)
const twoNumberSum = (array, targetSum) => {
  const res = [];
  let min, max;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let first = array[i];
      let sec = array[j];
      if (first + sec === targetSum) {
        min = Math.min(first, sec);
        max = Math.max(first, sec);
        return [min, max];
      }
    }
  }
  return res;
};

function twoNumberSumWithHash(array, targetSum) {
  const set = new Set(array);

  for (let i = 0; i < array.length; i++) {
    let elem = array[i];
    let diff = targetSum - elem;
    if (set.has(diff) && elem !== diff) {
      return [elem, diff];
    }
  }
  return [];
}
