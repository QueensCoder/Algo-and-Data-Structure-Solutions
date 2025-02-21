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

const dfs = (tree: BinaryTree, arr: number[]) => {
  if (tree.left) dfs(tree.left, arr);
  arr.push(tree.value);
  if (tree.right) dfs(tree.right, arr);
};

const expectedNodesOrdered = [9, 8, 4, 2, 1, 7, 11, 6];

// We're going to merge tree2 into tree1, so we can just modify tree1 in place
export const mergeBSTHelper = (tree1: BinaryTree, tree2: BinaryTree | null) => {
  if (tree1.left) mergeBSTHelper(tree1.left, tree2?.left ?? null);
  //   if tree1 doesn't have nodes found in tree two, set tree1.left to tree2.left
  else if (!tree1.left && tree2?.left) tree1.left = tree2.left;

  //   if tree1 and two both have nodes, add those values and replace tree1's value
  let treeOneValue = tree1.value;
  let treeTwoValue = tree2?.value;
  tree1.value = treeOneValue + (treeTwoValue || 0);

  if (tree1.right) mergeBSTHelper(tree1.right, tree2?.right ?? null);
  else if (!tree1.right && tree2?.right) tree1.right = tree2.right;
};

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  mergeBSTHelper(tree1, tree2);
  const arr = [];
  dfs(tree1, arr);
  //   console.log(arr, expectedNodesOrdered);
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

// tree1 after merging
//         2
//        / \
//       8   11
//      / \  / \
//     9  4  7   6

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

console.log(mergeBinaryTrees(tree1, tree2));
