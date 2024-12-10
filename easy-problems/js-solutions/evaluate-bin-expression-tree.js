// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree(tree) {
  // Write your code here.
  if (tree.value >= 0) return tree.value;
  const left = evaluateExpressionTree(tree.left);
  const right = evaluateExpressionTree(tree.right);

  if (tree.value === -1) return left + right;
  else if (tree.value === -2) return left - right;
  else if (tree.value === -3) return Math.trunc(left / right);
  else return left * right;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.evaluateExpressionTree = evaluateExpressionTree;
