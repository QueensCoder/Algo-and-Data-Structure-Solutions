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

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.right = new BinaryTree(6);
tree.left.right.left = new BinaryTree(7);
tree.left.right.right = new BinaryTree(8);

// tree example
//         1
//        / \
//       2   3
//      / \   \
//     4   5   6
//        / \
//       7   8

export const treeHeightChecker = (tree: BinaryTree | null): number => {
  if (!tree) return 0;
  const leftSubTreeHeight = treeHeightChecker(tree.left);
  const rightSubTreeHeight = treeHeightChecker(tree.right);

  if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) > 1) return NaN;

  return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
};

export function heightBalancedBinaryTree(tree: BinaryTree) {
  const leftSubTreeHeight = treeHeightChecker(tree.left);
  const rightSubTreeHeight = treeHeightChecker(tree.right);

  if (isNaN(leftSubTreeHeight) || isNaN(rightSubTreeHeight)) return false;
  else if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) > 1) return false;

  return true;
}

console.log(heightBalancedBinaryTree(tree)); // true
