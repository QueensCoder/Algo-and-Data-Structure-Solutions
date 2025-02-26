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

export const bstHeightCheck = (tree: BinaryTree) => {
  // keep track of height of tree at a given node
  let left = 0;
  let right = 0;
  if (tree.left) {
    const leftHeight = bstHeightCheck(tree.left);
    left = leftHeight + 1;
  }
  if (tree.right) {
    const rightHeight = bstHeightCheck(tree.right);
    right = rightHeight + 1;
  }
  console.log(left, right, tree.value);
  return Math.max(left + right, 0);
};

export function binaryTreeDiameter(tree: BinaryTree) {
  let currMaxHeight = 0;
  const bstHeightCheck = (tree: BinaryTree) => {
    // keep track of height of tree at a given node
    let left = 0;
    let right = 0;
    if (tree.left) {
      const leftHeight = bstHeightCheck(tree.left);
      left = leftHeight + 1;
    }
    if (tree.right) {
      const rightHeight = bstHeightCheck(tree.right);
      right = rightHeight + 1;
    }
    currMaxHeight = Math.max(left + right, currMaxHeight);
    return Math.max(left, right);
  };

  bstHeightCheck(tree);
  return currMaxHeight;
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

// tree
//          1
//        /   \
//       3     2
//      / \
//     7   4
//    /     \
//   8       5
//  /         \
// 9           6

console.log(binaryTreeDiameter(root));

export function binaryTreeDiameterSimplfied(tree: BinaryTree) {
  let currMax = 0;
  const bstHeightCheck = (tree: BinaryTree | null): number => {
    if (!tree) return -1;
    const leftSubTree: number = bstHeightCheck(tree.left) + 1;
    const rightSubTree: number = bstHeightCheck(tree.right) + 1;

    currMax = Math.max(leftSubTree + rightSubTree, currMax);
    return Math.max(leftSubTree, rightSubTree);
  };

  bstHeightCheck(tree);

  return currMax;
}
