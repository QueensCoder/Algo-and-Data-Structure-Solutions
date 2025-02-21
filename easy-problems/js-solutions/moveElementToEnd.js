// first start with two pointers one at the begining of the array
// the other at the end of the array
// since the numbers to move have be at the end - check to see if the number matches if so move right pointer left
// if the pointer at the begining has a non to move number increment the pointer index
// finally if the left pointer is pointing at a number to  move and the right pointer is pointing at a number that isnt supposed to be at the end
// swap them, continue until array is in desired order

// O(n) time O(1) space
function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let atEnd = array[right];
    let atBeg = array[left];

    if (atEnd === toMove) right--;
    else if (atBeg !== toMove) left++;
    else swap(array, left, right);
  }
  return array;
}

const swap = (arr, left, right) => {
  const move = arr[left];
  arr[left] = arr[right];
  arr[right] = move;
};

// O(n) time , O(n) space
const moveElementToEndOneLine = (array, toMove) => {
  return array
    .filter((item) => item !== toMove)
    .concat(array.filter((item) => item === toMove));
};
