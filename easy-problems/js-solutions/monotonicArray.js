const determineDir = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      return 'inc';
    } else if (array[i] > array[i + 1]) {
      return 'dec';
    }
  }
};

// iterate and determine direction of either increase or decreasing
function isMonotonic(array) {
  if (array.length <= 1) return true;
  let initialDir = determineDir(array);
  let currDir = initialDir;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      currDir = 'inc';
    } else if (array[i] > array[i + 1]) {
      currDir = 'dec';
    }

    if (initialDir !== currDir) return false;
  }
  return true;
}
