// array is sorted and has distinct integers
// since array is sorted all values left of root value
// will be put in left subtree and all greater values
// will go into the right subtree
const minHelper = (tree, arr) => {
  if (!arr.length) return; //if nothing in array stop
  const mid = Math.floor((arr.length - 1) / 2);
  tree.insert(arr[mid]);
  minHelper(tree, arr.slice(0, mid));
  minHelper(tree, arr.slice(mid + 1, arr.length));
};

function minHeightBst(arr) {
  const mid = Math.floor((arr.length - 1) / 2);
  const tree = new BST(arr[mid]);
  minHelper(tree, arr.slice(0, mid)); //slice is non inclusive
  minHelper(tree, arr.slice(mid + 1, arr.length));
  console.log(tree);
  return tree;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
