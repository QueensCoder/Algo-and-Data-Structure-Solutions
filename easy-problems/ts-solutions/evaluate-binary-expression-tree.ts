// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTree = new BinaryTree(-1);
binaryTree.left = new BinaryTree(-2);
binaryTree.right = new BinaryTree(-3);
binaryTree.left.left = new BinaryTree(-4);
binaryTree.left.right = new BinaryTree(2);
binaryTree.left.left.left = new BinaryTree(2);
binaryTree.left.left.right = new BinaryTree(3);
binaryTree.right.left = new BinaryTree(8);
binaryTree.right.right = new BinaryTree(3);

//    -1
//   /   \
//  -2   -3
//  / \  / \
// -4 2  8 3
// /  \
// 2   3

// -1 addition
// -2 subtraction
// -3 division
// -4 multiplication
// This is an input class. Do not edit.

export function evaluateExpressionTree(tree: BinaryTree): number {
  if (tree.left !== null && tree.right !== null) {
    if (tree?.value === -1)
      return (
        evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
      );
    else if (tree?.value === -2)
      return (
        evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
      );
    else if (tree?.value === -3)
      return Math.trunc(
        evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right),
      );
    else if (tree?.value === -4)
      return (
        evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right)
      );
  }

  return tree.value;
}

console.log(evaluateExpressionTree(binaryTree)); // 3
