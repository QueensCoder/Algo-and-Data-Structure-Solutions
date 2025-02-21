// naive solution use double for loop and compare the difference to each number in
// each array resulting in n squared time

// optimal approach
// sort both arrays first
// if a number in array one has the same value as an element in array two that is the
// smallest difference pair

// if the numbers are not equal to each other, we take advantage of the fact they are sorted
// use two pointers one pointing at array 1 other at array two, move the pointers
// so that the difference between the selected numbers decrease
// compare value's of current number and that determines wether to move left or right

// start at begining of both arrays if a value is greater , then move the other pointer
// because if you move the greater pointer the differene will increase but moving the other
// pointer should decrease the difference
// on each change if the difference was less than the last positions update the values and diff

function smallestDifference(arrayOne, arrayTwo) {
  const arrO = arrayOne.sort((a, b) => a - b);
  const arrT = arrayTwo.sort((a, b) => a - b);
  let diff = 0;
  let numOne;
  let numTwo;
  let p1 = 0;
  let p2 = 0;

  while (p1 !== arrayOne.length && p2 !== arrayTwo.length) {
    let first = arrayOne[p1];
    let second = arrayTwo[p2];
    if (first === second) {
      return [first, second];
    } else if (first > second) {
      let currDiff = Math.abs(first - second);
      if (!diff || currDiff < diff) {
        diff = currDiff;
        numOne = first;
        numTwo = second;
      }
      p2++;
    } else {
      let currDiff = Math.abs(first - second);
      if (!diff || currDiff < diff) {
        diff = second - first;
        numOne = first;
        numTwo = second;
      }
      p1++;
    }
  }
  return [numOne, numTwo];
}
