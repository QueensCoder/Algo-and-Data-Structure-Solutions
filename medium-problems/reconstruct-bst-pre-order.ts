export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  // Write your code here.
  return null;
}
