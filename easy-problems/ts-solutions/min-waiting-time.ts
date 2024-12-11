export function minimumWaitingTime(queries: number[]) {
  let previous = 0;
  for (let i = 0; i < queries.length; i++) {
    let current = queries[i];
    let previousSum = previous;
  }

  return -1;
}

//  5     1      4  - query durations
// (0) + (5) + (5 + 1) = 11 - wait times (note 0 for first query, and last query duration is not used in a wait time)
console.log(minimumWaitingTime([5, 4, 1])); // 11
console.log(minimumWaitingTime([3, 2, 1, 2, 6])); // 17
