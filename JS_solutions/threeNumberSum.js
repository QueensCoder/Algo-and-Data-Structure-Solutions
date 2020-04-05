// first sort array
// start at begining of array
// set two pointers one after the current element and one at the end
// if curr number + left + right = target add all elements to an array
//  since target is matched at this point move both pointers
// else if the curr number + left + right < target move left pointer
// else if curr number + left + right > target move right pointer
// continue this operation while the left pointer position is less than the right p poistion

// O of n squared time , O of N space because of the arrays of arrays we create
function threeNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let l = i + 1;
    let r = array.length - 1;
    while (l < r) {
      let left = array[l];
      let right = array[r];
      let compare = curr + left + right;
      if (compare === targetSum) {
        result.push([curr, left, right]);
        l++;
        r--;
      } else if (compare < targetSum) l++;
      else if (compare > targetSum) r--;
    }
  }
  return result;
}
