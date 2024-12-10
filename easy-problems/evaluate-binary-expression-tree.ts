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

export function evaluateExpressionTree(tree: BinaryTree) {
  // Write your code here.
  return -1;
}
