const maxtrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const transposeMatrix = (matrix: number[][]): number[][] => {
  const matrixLength = matrix.length;

  const arr: number[][] = [];
  for (let i = 0; i < matrixLength; i++) {
    const row = matrix[i];
    const rowLength = row.length;

    for (let j = 0; j < rowLength; j++) {
      if (!arr[j]) arr[j] = [matrix[i][j]];
      else arr[j].push(matrix[i][j]);
    }
  }
  return arr;
};

console.log(transposeMatrix(maxtrix));
console.log(transposeMatrix([[1, 2]]));
