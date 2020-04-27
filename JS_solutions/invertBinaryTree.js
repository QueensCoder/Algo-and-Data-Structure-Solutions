const swap = (node) => {
  const left = node.left;
  node.left = node.right;
  node.right = left;
};

function invertBinaryTree(tree) {
  const que = [tree];
  while (que.length) {
    let node = que.shift();
    if (node.left) que.push(node.left);
    if (node.right) que.push(node.right);
    swap(node);
  }
  return tree;
}
