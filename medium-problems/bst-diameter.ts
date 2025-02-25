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

type treeMaxType = { value: number | null; diameter: number };
export const bstHeightCheck = (tree: BinaryTree, treeMax: treeMaxType) => {
  // keep track of height of tree at a given node
  const treeInfo = { left: 0, right: 0 };
  if (tree.left) {
    const leftHeight = bstHeightCheck(tree.left, treeMax);
    treeInfo.left = leftHeight.left + 1;
  }
  if (tree.right) {
    const rightHeight = bstHeightCheck(tree.right, treeMax);
    treeInfo.right = rightHeight.right + 1;
  }

  const newDiameter = treeInfo.left + treeInfo.right;
  if (newDiameter > treeMax.diameter) {
    treeMax.diameter = newDiameter;
    treeMax.value = tree.value;
  }

  return treeInfo;
};

export function binaryTreeDiameter(tree: BinaryTree) {
  const treeMax: treeMaxType = { value: null, diameter: 0 };
  bstHeightCheck(tree, treeMax);

  return treeMax.diameter;
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
