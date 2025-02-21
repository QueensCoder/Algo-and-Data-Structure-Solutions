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

// We're going to merge tree2 into tree1, so we can just modify tree1 in place
export const mergeBSTHelper = (
  tree1: BinaryTree | null,
  tree2: BinaryTree | null,
) => {
  if (!tree1 && !tree2) return;
  mergeBSTHelper(tree1?.left ?? null, null);
  console.log(tree1?.value);
  mergeBSTHelper(tree1?.right ?? null, null);
};

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  mergeBSTHelper(tree1, tree2);
  return tree1;
}

// tree example
// tree1
//         1
//        / \
//       3   2
//      / \
//     7   4
//

// tree2
//         1
//        / \
//       5   9
//      /   / \
//     2   7   6
//

const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(3);
tree1.right = new BinaryTree(2);
tree1.left.left = new BinaryTree(7);
tree1.left.right = new BinaryTree(4);

const tree2 = new BinaryTree(1);
tree2.left = new BinaryTree(5);
tree2.right = new BinaryTree(9);
tree2.left.left = new BinaryTree(2);
tree2.right.left = new BinaryTree(7);
tree2.right.right = new BinaryTree(6);
