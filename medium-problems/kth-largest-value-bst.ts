// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Brute force using DFS in order traversal
export function findKthLargestValueInBst(tree: BST, k: number) {
  // Write your code here.
  return -1;
}

const tree = new BST(15);
tree.left = new BST(5);
tree.right = new BST(20);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.right.left = new BST(17);
tree.right.right = new BST(22);

console.log(findKthLargestValueInBst(tree, 3)); // 17
