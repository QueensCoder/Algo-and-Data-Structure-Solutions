const swap = (p1, p2, array) => {
  let one = array[p1];
  array[p1] = array[p2];
  array[p2] = one;
};

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let lastIndex = i - 1;
    let curr = i;
    while (lastIndex >= 0) {
      if (array[curr] < array[lastIndex]) {
        swap(curr, lastIndex, array);
        curr = lastIndex;
      }
      lastIndex--;
    }
  }
  return array;
}
