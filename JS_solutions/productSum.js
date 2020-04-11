const productSum = (array, depth) => {
  depth = depth || 1;
  let sum = 0;
  array.forEach((elem) => {
    if (elem instanceof Array) {
      sum += productSum(elem, depth + 1) * depth;
    } else {
      sum += elem * depth;
    }
  });
  return sum;
};
