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
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  containsHelper(tree: BST | null, value: number): boolean | undefined {
    if (tree === null) return false;
    if (tree.value === value) return true;

    if (value < tree.value) return this.containsHelper(tree.left, value);
    if (value >= tree.value) return this.containsHelper(tree.right, value);
  }

  contains(value: number) {
    return this.containsHelper(this, value);
  }

  remove(value: number): BST {
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

console.log(tree.contains(22));
console.log(tree.contains(100));
console.log(tree.contains(5));
