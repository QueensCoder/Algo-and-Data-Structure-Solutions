//start at top right and move row and col according to curr number vs target
//if number is larger than target number disregard numbers to right
// and elimnate numbers below it

//if number is smaller than target then elimnate numbers to the left

// if pointers move outside of matrix end the search and return -1 , -1 because the matrix does not contain the number
// (O n + m)
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  let currNum = matrix[row][col];
  while (row < matrix.length && col >= 0) {
    if (currNum > target) {
      col--;
    } else if (currNum < target) {
      row++;
    } else {
      return [row, col];
    }
    currNum = matrix[row][col];
  }
  return [-1, -1];
}
