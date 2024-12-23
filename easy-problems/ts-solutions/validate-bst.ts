class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBstHelper(
  tree: BST | null,
  min: number,
  max: number,
): boolean {
  if (!tree) return true;
  const { left, right, value } = tree;

  if (value >= max) return false;
  if (value < min) return false;

  const leftSubtree = left ? validateBstHelper(tree.left, min, value) : true;
  const rightSubtree = right ? validateBstHelper(tree.right, value, max) : true;
  return leftSubtree && rightSubtree;
}

export function validateBst(tree: BST): boolean {
  const min = -Infinity;
  const max = Infinity;
  return validateBstHelper(tree, min, max);
}

const tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(13);
tree.left.left.right = new BST(22);

// console.log(validateBst(tree));

// {"id": "10", "left": "5", "right": "15", "value": 10},
// {"id": "15", "left": null, "right": null, "value": 15},
// {"id": "5", "left": null, "right": "10-2", "value": 5},
// {"id": "10-2", "left": null, "right": null, "value": 10}
/**
 * Example of a Binary Search Tree (BST):
 *
 *        10
 *       /  \
 *     5    15
 *      \
 *      10
 *
 * `tree2` is an instance of the BST class with the root node value of 10.
 */
const tree2 = new BST(10);
tree2.left = new BST(5);
tree2.right = new BST(15);
tree2.left.right = new BST(10);

console.log(validateBst(tree2));

// -inf < 10 < inf - good
// -inf < 5 < 10 - good
// 5 < 10 < 10 - bad
// left subtree has a node that is greater than parent node of left subtree
