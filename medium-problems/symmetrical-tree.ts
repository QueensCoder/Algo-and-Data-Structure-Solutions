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

export function symmetricalTree(tree: BinaryTree) {
  // Write your code here.
  return false;
}

const tree = new BinaryTree(1);
// left sub tree
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(4);
tree.left.left.left = new BinaryTree(5);
tree.left.left.right = new BinaryTree(6);
// right sub tree
tree.right = new BinaryTree(2);
tree.right.right = new BinaryTree(3);
tree.right.left = new BinaryTree(4);
tree.right.right.right = new BinaryTree(5);
tree.right.right.left = new BinaryTree(6);

// tree
//         1
//       /   \
//      2     2
//     / \   / \
//    3   4 4   3
//   / \ / \ / \ / \
//  5  6 6  5 5  6 6  5

console.log(symmetricalTree(tree)); // true
