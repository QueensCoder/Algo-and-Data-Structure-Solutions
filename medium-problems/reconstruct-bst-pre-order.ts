export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export const preOrderDFS = (tree: BST, nodeList: number[]) => {
  nodeList.push(tree.value);
  console.log(tree.value);
  if (tree.left) preOrderDFS(tree.left, nodeList);
  if (tree.right) preOrderDFS(tree.right, nodeList);
};

export const insertNode = (tree: BST, value: number) => {
  if (value < tree.value) {
    if (!tree.left) {
      tree.left = new BST(value);
    } else {
      insertNode(tree.left, value);
    }
  } else {
    if (!tree.right) {
      tree.right = new BST(value);
    } else {
      insertNode(tree.right, value);
    }
  }
};

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  const preOrderTraversalValuesClone = [...preOrderTraversalValues];
  const firstValue = preOrderTraversalValuesClone.shift();
  if (!firstValue) return null;
  const tree = new BST(firstValue);

  preOrderTraversalValuesClone.forEach((value) => insertNode(tree, value));

  return tree;
}

const preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
// expected tree
//         10
//        /  \
//       4    17
//      / \     \
//     2   5    19
//    /         /
//   1         18

const preOrderConstructedTree = reconstructBst(preOrderTraversalValues);

const newTreeValues: number[] = [];
preOrderDFS(preOrderConstructedTree, newTreeValues);
console.log(newTreeValues, preOrderTraversalValues);
