export function mergeOverlappingIntervals(array: number[][]) {
  //   first sort the array so we can start examining what we can merge
  array.sort((a, b) => a[0] - b[0]);

  let currPointer = 0;
  let nextPointer = 1;
  let currInterval = array[currPointer];
  let nextInterval = array[nextPointer];

  while (nextInterval) {
    let currOne = currInterval[0];
    let currTwo = currInterval[1];

    let nextOne = nextInterval[0];
    let nextTwo = nextInterval[1];

    //   look at i and i + 1, if aka curr, next
    // if curr[1] between next[0] and next[1] AND next[0] between curr[0] and curr[0] merge
    // else continue and move pointers forward
    if (
      nextOne >= currOne &&
      nextOne <= currTwo &&
      currTwo >= nextOne &&
      currTwo <= nextTwo
    ) {
      let mergedInterval = [currOne, nextTwo];
      array.splice(currPointer, 2, mergedInterval);

      currInterval = array[currPointer];
      nextInterval = array[nextPointer];
    } else {
      currPointer++;
      nextPointer++;
      currInterval = array[currPointer];
      nextInterval = array[nextPointer];
    }
  }

  return array;
}

const array = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

console.log(mergeOverlappingIntervals(array));
