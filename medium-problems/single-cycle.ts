export function hasSingleCycle(array: number[]) {
  const arrLen = array.length;
  let count = 0;
  let i = 0;

  while (!isNaN(array[i])) {
    // mark that index was visted
    let curr = array[i];
    array[i] = NaN;
    let rawIdxCalc = (i + curr) % arrLen;
    // if result is negative we need to use a reverse idx by total len + negative idx to get regular idx
    const nextIdx = rawIdxCalc >= 0 ? rawIdxCalc : rawIdxCalc + arrLen;
    i = nextIdx;
    count++;
  }

  if (count === arrLen) return true;
  else return false;
}

// 2(start point), 1, -4, 2(end 2), 3, -4 (second), 2 (start point)
console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
