export function hasSingleCycle(array: number[]) {
  // list visted indexes
  const arrLen = array.length;
  const visited = new Set();
  let count = 0;
  let i = 0;

  // if result is negative we need to use a reverse idx by total len + negative idx to get regular idx

  while (visited.size !== arrLen) {
    // mark that index was visted
    visited.add(i);
    let curr = array[i];
    let rawIdxCalc = (i + curr) % arrLen;
    const nextIdx = rawIdxCalc >= 0 ? rawIdxCalc : rawIdxCalc + arrLen;
    i = nextIdx;
  }

  if (visited.size === arrLen && i === 0) return true;
  else return false;
}

// 2(start point), 1, -4, 2(end 2), 3, -4 (second), 2 (start point)
console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
