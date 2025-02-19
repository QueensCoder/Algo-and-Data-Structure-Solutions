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

export const depthFirstSearch = (
  tree: BinaryTree | null,
  array: number[],
  order: 'pre-order' | 'reverse-pre-order',
) => {
  if (!tree) return;
  if (order === 'pre-order') {
    depthFirstSearch(tree.left, array, order);
    array.push(tree.value);
    depthFirstSearch(tree.right, array, order);
  } else {
    depthFirstSearch(tree.right, array, order);
    array.push(tree.value);
    depthFirstSearch(tree.left, array, order);
  }
};

// Approach 1: DFS pre order and reverse pre order on left and right sub trees
// O(n) time | O(n) space, if both arrays values are equal then tree is symmetrical
export function symmetricalTree(tree: BinaryTree) {
  if (!tree.left && !tree.right) return true;
  else if (!tree.left && tree.right) return false;
  else if (tree.left && !tree.right) return false;

  const leftSubTreeArray: number[] = [];
  const rightSubTreeArray: number[] = [];
  depthFirstSearch(tree.left, leftSubTreeArray, 'pre-order');
  depthFirstSearch(tree.right, rightSubTreeArray, 'reverse-pre-order');

  if (leftSubTreeArray.length !== rightSubTreeArray.length) return false;

  for (let i = 0; i < leftSubTreeArray.length; i++) {
    let leftElement = leftSubTreeArray[i];
    let rightElement = rightSubTreeArray[i];

    if (leftElement !== rightElement) return false;
  }

  return true;
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
