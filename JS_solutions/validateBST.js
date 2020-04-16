// first set min and max values
// min and max value will determine the value range that a value can be
// based on its location in the tree
// for example
//       10
//      /  \
//     5   15
//      \
//       5
// the left node has a max value of a number < 10 and min if -Infinity
// the left.right node value has a min value of 5 and a max value of 10
// the right node has a min value of 10 and max value of Infinity
// these ranges are determined by the nodes parent and grandparent

const validateHelper = (tree, min, max) => {
  if (!tree) return true;
  const { value, left, right } = tree;
  if (value < min || value >= max) return false;
  return validateHelper(left, min, value) && validateHelper(right, value, max);
};

function validateBst(tree) {
  return validateHelper(tree, -Infinity, Infinity);
}
