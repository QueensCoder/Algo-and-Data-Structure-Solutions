// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// O(n) time, O(n) space
const findSuccessorHelper = (
  tree: BinaryTree | null,
  node: BinaryTree,
  nodes: number[],
) => {
  if (!tree) return;

  findSuccessorHelper(tree.left, node, nodes);
  nodes.push(tree.value);
  findSuccessorHelper(tree.right, node, nodes);
};

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  const nodes: number[] = [];
  findSuccessorHelper(tree, node, nodes);

  return nodes[nodes.indexOf(node.value) + 1];
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.parent = tree;
tree.right = new BinaryTree(3);
tree.right.parent = tree;
tree.left.left = new BinaryTree(4);
tree.left.left.parent = tree.left;
tree.left.right = new BinaryTree(5);
tree.left.right.parent = tree.left;
tree.left.left.left = new BinaryTree(6);
tree.left.left.left.parent = tree.left.left;
const node = tree.left.right;

console.log(findSuccessor(tree, node));
