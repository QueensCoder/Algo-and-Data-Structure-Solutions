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

// get tree sum and its half value
const dfsSum = (tree: BinaryTree | null): number => {
  if (!tree) return 0;
  let leftValue = dfsSum(tree.left);
  let rightValue = dfsSum(tree.right);

  const treeTotal = leftValue + rightValue + tree.value;
  return treeTotal;
};

const dfsTreeSplitCheck = (
  tree: BinaryTree | null,
  maxValue: number,
): number | undefined => {
  if (!tree) return 0;
  let leftValue = dfsTreeSplitCheck(tree.left, maxValue) ?? 0;
  let rightValue = dfsTreeSplitCheck(tree.right, maxValue) ?? 0;

  if (leftValue === maxValue) {
    // if left subtree has half of the total value, its the first half
    tree.left = null;
    return;
  } else if (rightValue === maxValue) {
    tree.right = null;
    return;
  }

  const treeTotal = leftValue + rightValue + tree.value;
  return treeTotal;
};

export function splitBinaryTree(tree: BinaryTree) {
  // if no left or right node return 0
  if (!tree.left && !tree.right) return 0;

  let treeTotal = 0;

  treeTotal = dfsSum(tree);
  // if treeTotal is odd the tree cannot be split into two
  if (treeTotal % 2 === 1) return 0;

  const halfTreeTotal = treeTotal / 2;

  // we could do this without the additional check here but it was quicker and a little cleaner just to iterate again
  // 2n isn't much worse that O(n)
  const remainingValueAfterSplit = dfsSum(tree);

  return halfTreeTotal === remainingValueAfterSplit ? halfTreeTotal : 0;
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

const root2 = new BinaryTree(1);
root2.right = new BinaryTree(2);
root2.right.right = new BinaryTree(3);
root2.right.right.right = new BinaryTree(-4);
root2.right.right.right.right = new BinaryTree(5);
root2.right.right.right.right.right = new BinaryTree(6);
root2.right.right.right.right.right.right = new BinaryTree(9);

// tree
//  1
//   \
//    2
//     \
//      3
//       \
//       -4
//         \
//          5
//           \
//            6
//             \
//              9

const root3 = new BinaryTree(1);
root3.right = new BinaryTree(2);
root3.right.right = new BinaryTree(3);
root3.right.right.right = new BinaryTree(-4);
root3.right.right.right.right = new BinaryTree(9);
root3.right.right.right.right.right = new BinaryTree(5);
root3.right.right.right.right.right.right = new BinaryTree(6);

// tree
//  1
//   \
//    2
//     \
//      3
//       \
//       -4
//         \
//          9
//           \
//            5
//             \
//              6

// console.log(splitBinaryTree(root), 6);
// console.log(splitBinaryTree(root2), 0);
console.log(splitBinaryTree(root3), 11);
