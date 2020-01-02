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
