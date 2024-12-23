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

export function validateBst(tree: BST): boolean {
  const { left, right, value } = tree;
  console.log(value, left?.value, right?.value);

  if (left && left.value >= value) return false;
  if (right && right.value < value) return false;
  const leftIsValid = left ? validateBst(left) : true;
  const rightIsValid = right ? validateBst(right) : true;
  return leftIsValid && rightIsValid;
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
