const swap = (p1, p2, array) => {
  let one = array[p1];
  array[p1] = array[p2];
  array[p2] = one;
};
function selectionSort(array) {
  if (array.length === 1) return array;
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let switchPos = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < curr) {
        curr = array[j];
        switchPos = j;
      }
    }
    swap(i, switchPos, array);
  }
  return array;
}
