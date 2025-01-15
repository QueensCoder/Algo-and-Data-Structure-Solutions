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

export const findKthHelperDFSInOrder = (tree: BST) => {
  const result: number[] = [];

  if (!tree) return result;
  if (tree.left) result.push(...findKthHelperDFSInOrder(tree.left));
  result.push(tree.value);
  if (tree.right) result.push(...findKthHelperDFSInOrder(tree.right));

  return result;
};

// Brute force using DFS in order traversal O(n) time | O(n) space
export function findKthLargestValueInBstBruteForce(tree: BST, k: number) {
  const result = findKthHelperDFSInOrder(tree);
  return result[result.length - k];
}

const tree = new BST(15);
tree.left = new BST(5);
tree.right = new BST(20);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.right.left = new BST(17);
tree.right.right = new BST(22);

// console.log(findKthLargestValueInBstBruteForce(tree, 3)); // 17

// optimal solution using DFS in order traversal O(h + k) time | O(n) space
export const findKthHelperDFSOptimal = (
  tree: BST,
  sortedNodes: number[],
  k: number,
) => {
  if (sortedNodes.length === k) return;
  if (tree.right) findKthHelperDFSOptimal(tree.right, sortedNodes, k);
  sortedNodes.push(tree.value);
  if (tree.left) findKthHelperDFSOptimal(tree.left, sortedNodes, k);
};

export function findKthLargestValueInBst(tree: BST, k: number) {
  const sortedNodes: number[] = [];
  findKthHelperDFSOptimal(tree, sortedNodes, k);
  return sortedNodes[k - 1];
}

console.log(findKthLargestValueInBst(tree, 3), 'result'); // 17
