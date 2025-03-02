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

export function splitBinaryTree(tree: BinaryTree) {
  let treeTotal = 0;

  const dfs = (tree) => {
    if (tree.left) dfs(tree.left);
    treeTotal += treeTotal;
    if (tree.right) dfs(tree.right);
  };

  console.log(treeTotal);
}

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.right = new BinaryTree(-2);
root.left.left = new BinaryTree(6);
root.left.right = new BinaryTree(-5);
root.left.left.left = new BinaryTree(2);
root.right.left = new BinaryTree(5);
root.right.right = new BinaryTree(2);

// tree
//          1
//        /   \
//       3    -2
//      / \   / \
//     6  -5 5   2
//    /
//   2

console.log(splitBinaryTree(root));
