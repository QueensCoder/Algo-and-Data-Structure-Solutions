export function minimumWaitingTime(queries: number[]) {
  const waitTimes: number[] = [];

  //   move largest queries to the end then calculate the total wait times
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let currNum = queries[i];
    console.log(currNum);
    if (!i) waitTimes.push(0);
    else {
      let previousTimes = queries.slice(0, i);

      waitTimes.push(...previousTimes);
    }
  }

  return waitTimes.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

//  5     1      4  - query durations
// (0) + (5) + (5 + 1) = 11 - wait times (note 0 for first query, and last query duration is not used in a wait time)
console.log(minimumWaitingTime([5, 1, 4]), 11); // 11

// 3     2     1     2     6
// 0   + 3  +  5 +   6  +  8 = 17
// 0 +   3 +  3+2 +  3+2+1 + 6+3+2+1
console.log(minimumWaitingTime([3, 2, 1, 2, 6]), 17); // 17

export function minimumWaitingTimeOptimizedSpace(queries: number[]) {
  const waitTimes: number[] = [];

  //   move largest queries to the end then calculate the total wait times
  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let currNum = queries[i];
    console.log(currNum);
    if (!i) waitTimes.push(0);
    else {
      let previousTimes = queries.slice(0, i);

      waitTimes.push(...previousTimes);
    }
  }

  return waitTimes.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

//  5     1      4  - query durations
// (0) + (5) + (5 + 1) = 11 - wait times (note 0 for first query, and last query duration is not used in a wait time)
console.log(minimumWaitingTimeOptimizedSpace([5, 1, 4]), 11); // 11

// 3     2     1     2     6
// 0   + 3  +  5 +   6  +  8 = 17
// 0 +   3 +  3+2 +  3+2+1 + 6+3+2+1
console.log(minimumWaitingTimeOptimizedSpace([3, 2, 1, 2, 6]), 17); // 17
