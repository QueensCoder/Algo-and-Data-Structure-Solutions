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

export function binaryTreeDiameter(tree: BinaryTree) {
  // Write your code here.
  return -1;
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
