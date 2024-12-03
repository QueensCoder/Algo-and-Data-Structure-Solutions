export function firstDuplicateValue(array: number[]) {
  let firstNum = -1;
  array.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr]++;
      if (firstNum === -1) {
        firstNum = curr;
      }
    } else prev[curr] = 1;
    return prev;
  }, {});

  return firstNum;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])); //2
console.log(firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])); //3
