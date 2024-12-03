const maxtrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const transposeMatrix = (matrix: number[][]): number[][] => {
  const matrixLength = matrix.length;

  const transposedMatrix = new Array(matrixLength).fill([]);
  for (let i = 0; i < matrixLength; i++) {
    const row = matrix[i];
    const rowLength = row.length;
    for (let j = 0; j < rowLength; j++) {}
  }
  return transposedMatrix;
};

console.log(transposeMatrix(maxtrix));
