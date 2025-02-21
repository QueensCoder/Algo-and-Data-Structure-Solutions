const inOrderHelper = ({ value, left, right }, array) => {
  if (left) inOrderHelper(left, array);
  array.push(value);
  if (right) inOrderHelper(right, array);
};

function inOrderTraverse(tree) {
  const arr = [];
  inOrderHelper(tree, arr);
  return arr;
}

const preOrderHelper = ({ value, left, right }, array) => {
  array.push(value);
  if (left) preOrderHelper(left, array);
  if (right) preOrderHelper(right, array);
};

function preOrderTraverse(tree, array) {
  const arr = [];
  preOrderHelper(tree, arr);
  return arr;
}

const postOrderHelper = ({ value, left, right }, array) => {
  if (left) postOrderHelper(left, array);
  if (right) postOrderHelper(right, array);
  array.push(value);
};

function postOrderTraverse(tree, array) {
  const arr = [];
  postOrderHelper(tree, arr);
  return arr;
}
