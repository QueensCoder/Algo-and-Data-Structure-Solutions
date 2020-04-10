// remove number from array and return new array without number
const removeNumFromArr = (arr, num) => {
  return arr.filter((item) => item !== num);
};

const permHelper = (arr, perm, perms) => {
  if (!perm) perm = [];
  if (!arr.length) {
    // 		if nothing is in array append the current permutation to the result arr
    perms.push(perm);

    // 		reset perm to be an empty array
    perm = [];
  } else {
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      // 			remove current number from array
      let newArr = removeNumFromArr(arr, num);
      // 			put curr num in permutation
      // 			have to make a new variable with newPerm or else we keep mutating the array
      let newPerm = [...perm, num];
      permHelper(newArr, newPerm, perms);
    }
  }
};

function getPermutations(array) {
  const result = [];
  if (!array.length) return [];
  permHelper(array, [], result);
  return result;
}
