// This is an input class. Do not edit.
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

const binaryTree = new BinaryTree(-1);
binaryTree.left = new BinaryTree(-2);
binaryTree.right = new BinaryTree(-3);
binaryTree.left.left = new BinaryTree(-4);
binaryTree.left.right = new BinaryTree(2);
binaryTree.left.left.left = new BinaryTree(2);
binaryTree.left.left.right = new BinaryTree(3);
binaryTree.right.left = new BinaryTree(8);
binaryTree.right.right = new BinaryTree(3);

//     -1
//   /    \
//  -2    -3
//  /  \   / \
// -4   2  8 3
// /  \
// 2   3

// -1 addition
// -2 subtraction
// -3 division
// -4 multiplication

/**
 * Approach
 * if left and right nodes are not null, do not evaluate the values
 *  Base case is return the value of the node, if the left and right nodes are null
 * we need to set the return of tree.value at the end because typescript will complain
 * math.trunc is more accurate vs math.floor here since we don't want any rounding
 * never have to worry about a case where either the left or right node is null, its always a full tree
 * so we don't need to check for null values of 1 node and the other being valid value
 * if a tree is balance we need to consider that in our implementation
 */

// O(n) time | O(h) space where h is the height of the tree
// whether we use recursion of a while loop using a stack for DFS, the space complexity is the same

export function evaluateExpressionTree(tree: BinaryTree): number {
  if (tree.left !== null && tree.right !== null) {
    if (tree?.value === -1)
      return (
        evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
      );
    else if (tree?.value === -2)
      return (
        evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
      );
    else if (tree?.value === -3)
      return Math.trunc(
        evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right),
      );
    else if (tree?.value === -4)
      return (
        evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right)
      );
  }

  return tree.value;
}

console.log(evaluateExpressionTree(binaryTree)); // 6

// export function evaluateExpressionTreeIteration(tree: BinaryTree) {
//   const stack = [tree];
//   let totalValue = 0;
//   while (stack.length) {
//     let currentNode = stack.pop();
//     if (currentNode?.left) stack.push(currentNode.left);
//     if (currentNode?.right) stack.push(currentNode.right);
//     console.log(currentNode?.value);
//   }

//   // return tree.value;
// }

// console.log(evaluateExpressionTreeIteration(binaryTree)); // 6
