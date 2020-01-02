const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    let curr = arr[mid];
    if (curr === num) {
      return mid;
    } else if (curr > num) {
      right = mid - 1; //go left
    } else {
      left = mid + 1; //go right
    }
  }
  return left === right && arr[left] === num ? left : -1;
};
