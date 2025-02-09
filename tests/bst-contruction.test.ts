import { BST } from '../medium-problems/bst-construction';
import { expect, test } from 'vitest';

const treeBuilder = () => {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  return root;
};

// tree examples
//         10
//       /    \
//      5      15
//     / \    /  \
//    2   5  13  22
//   /        \
//  1         14

// tree insert
//         10
//       /    \
//      5      15
//     / \    /  \
//    2   5  13  22
//   /      / \
//  1     12   14

// When using remove we look for the next smallest node to replace the removed node
// next smallest node must be greater than the removed node but smaller than all other nodes, it must also be greater than the left subtree
// tree remove
//         12
//       /    \
//      5      15
//     / \    /  \
//    2   5  13  22
//   /         \
//  1          14

test('Test Case BST methods', () => {
  const root = treeBuilder();

  root.insert(12);

  expect(root.right?.left?.left).not.toBeNull();
  expect(root.right?.left?.left!.value).toEqual(12);

  expect(root.contains(10)).toEqual(true);
  expect(root.contains(12)).toEqual(true);
  expect(root.contains(15)).toEqual(true);
  expect(root.contains(1000)).toEqual(false);
});
