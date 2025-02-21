// find the max subset sum in an array

// iterate through array currSum = max of currSum + num or num
// if currSum > maxSum set a new maxSum

function kadanesAlgorithm(array) {
  let maxSum = -Infinity;
  let currSum = 0;

  array.forEach((num) => {
    currSum = Math.max(currSum + num, num);
    if (currSum > maxSum) maxSum = currSum;
  });
  return maxSum;
}

console.log(
  kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
); //returns 19
