// find the max subset sum in an array
// alternative to kadanes algorithm

// iterate through array currSum = max of currSum + num or num
// if currSum > maxSum set a new maxSum

function maxSubSetSum(array) {
  let maxSum = -Infinity;
  let currSum = 0;

  array.forEach((num) => {
    currSum = Math.max(currSum + num, num);
    if (currSum > maxSum) maxSum = currSum;
  });
  return maxSum;
}

console.log(maxSubSetSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));
