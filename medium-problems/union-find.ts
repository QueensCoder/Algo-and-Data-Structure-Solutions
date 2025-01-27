export class UnionFind {
  tree: { [key: number]: {} } = {};
  constructor() {
    this.tree = {};
  }

  createSet(value: number) {
    this.tree[value] = new Set();
    return this.tree[value];
  }

  find(value: number) {
    // Write your code here.
  }

  union(valueOne: number, valueTwo: number) {
    const unionOne = this.tree[valueOne];
    const unionTwo = this.tree[valueTwo];

    console.log(unionOne, unionTwo);
    // this.tree[valueOne] = { ...unionOne, unionTwo, valueTwo };
    return this.tree[valueOne];
  }
}

const unionFind = new UnionFind();
console.log(unionFind.createSet(3));
console.log(unionFind.createSet(6));
console.log(unionFind.union(3, 6));
// console.log(unionFind.find(6));
// console.log(unionFind.find(3));
// console.log(unionFind.createSet(2));
// console.log(unionFind.union(2, 6));
