// total count is even
// half red shirt half blue shirt
// all students wearing the red shirts must be in the same row, same for blue
// taller students must be in the back row
export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[],
) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const backRow =
    redShirtHeights[0] > blueShirtHeights[0]
      ? redShirtHeights
      : blueShirtHeights;
  const frontRow =
    redShirtHeights[0] > blueShirtHeights[0]
      ? blueShirtHeights
      : redShirtHeights;
  for (let i = 0; i < frontRow.length; i++) {
    let frontStudent = frontRow[i];
    let backStudent = backRow[i];
    if (frontStudent >= backStudent) {
      return false;
    }
  }

  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));

console.log(classPhotos([6], [6]), false);
// console.log(classPhotos([6], [7]), true);
console.log(classPhotos([6, 9], [7, 8]), false);
