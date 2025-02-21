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

export const mergeBSTHelper = (
  tree1: BinaryTree | null,
  tree2: BinaryTree | null,
) => {
  const treeOneVal = tree1?.value;
  const treeTwoVal = tree2?.value;
  mergeBSTHelper(tree1.left, tree2.left);

  if (treeOneVal && treeTwoVal) tree1.value = treeOneVal + treeTwoVal;
  if (!treeOneVal) tree1.value = treeTwoVal;
  mergeBSTHelper(tree1.right, tree2.right);
};

export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  // Write your code here.
  return null;
}
