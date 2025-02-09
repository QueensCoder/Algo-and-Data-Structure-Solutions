// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    this.insertHelper(this, value);
    return this;
  }

  insertHelper(tree: BST, value: number) {
    if (tree.value > value) {
      if (tree.left) this.insertHelper(tree.left, value);
      else tree.left = new BST(value);
    } else {
      if (tree.right) this.insertHelper(tree.right, value);
      else tree.right = new BST(value);
    }
  }

  contains(value: number) {
    return !!this.containsHelper(this, value);
  }

  containsHelper(tree: BST | null, value: number) {
    if (!tree) return false;
    if (tree.value === value) return true;

    if (tree.value > value && tree.left)
      return this.containsHelper(tree.left, value);
    if (tree.value <= value && tree.right)
      return this.containsHelper(tree.right, value);
  }

  // for the removed node if on right side of tree, we need to now find the next smallest node and replace the removed node
  // whenever a node is removed you always look left since a smaller node can now be the parent
  removeHelper(tree: BST | null, value: number) {
    // if (!tree) return false;
    // if (tree.value === value) return true;
    // if (tree.value > value && tree.left)
    //   return this.containsHelper(tree.left, value);
    // if (tree.value <= value && tree.right)
    //   return this.containsHelper(tree.right, value);
  }

  remove(value: number): BST {
    // trees with single node cannot be removed
    if (this.value === value && !this.left && !this.right) return this;
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

const tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
