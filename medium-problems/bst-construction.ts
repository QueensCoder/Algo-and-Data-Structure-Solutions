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
    const visited: number[] = [];

    this.containsHelper(this, value, visited);
    const lastVisited = visited[visited.length - 1];
    return lastVisited === value;
  }

  containsHelper(tree: BST | null, value: number, visited: number[]) {
    const lastVisited = visited[visited.length - 1];
    if (lastVisited === value) return true;
    if (!tree) return;
    if (tree.value > value) this.containsHelper(this.left, value, visited);
    visited.push(tree.value);
    if (tree.value > value) this.containsHelper(this.left, value, visited);
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
