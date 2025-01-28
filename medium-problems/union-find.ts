export class UnionFind {
  tree: { [key: number]: Set<number> } = {};

  constructor() {
    this.tree = {};
  }

  createSet(value: number) {
    if (this.tree[value] === undefined) this.tree[value] = new Set();
    return null;
  }

  find(value: number): number | undefined {
    if (this.tree[value] !== undefined) return value;
    else {
      const foundKey = Object.keys(this.tree)
        .map(Number) // Convert keys to numbers
        .find((key: number) => this.tree[key].has(value));
      return foundKey;
    }
  }

  union(valueOne: number, valueTwo: number) {
    const unionOne = this.tree[valueOne];
    const unionTwo = this.tree[valueTwo];

    if (!unionOne || !unionTwo) return null;

    if (!unionTwo) {
      const foundKey = Object.keys(this.tree)
        .map(Number) // Convert keys to numbers
        .find((key: number) => this.tree[key].has(valueTwo));

      if (!foundKey) unionOne.add(valueTwo);
      else {
        this.tree[foundKey].add(valueTwo);
      }
    } else {
      this.tree[valueOne] = new Set([...unionOne, ...unionTwo, valueTwo]);
      delete this.tree[valueTwo];
    }

    return null;
  }
}

const unionFind = new UnionFind();
console.log(unionFind.createSet(0));
console.log(unionFind.createSet(2));
console.log(unionFind.union(0, 2));
console.log(unionFind.createSet(3));
console.log(unionFind.createSet(1));
console.log(unionFind.union(1, 3));
console.log(unionFind.find(0), 'should be 0');
console.log(unionFind.find(1), 'should be 1');
console.log(unionFind.find(2), 'should be 0');
console.log(unionFind.find(3), 'should be 1');
console.log(unionFind.union(3, 0));
console.log(unionFind.find(0), 'should be 1');

console.log(unionFind.tree);

// simple tests word
// console.log(unionFind.createSet(3));
// console.log(unionFind.createSet(6));
// console.log(unionFind.union(3, 6));
// console.log(unionFind.find(6));
// console.log(unionFind.find(3));
// console.log(unionFind.createSet(2));
// console.log(unionFind.union(2, 6));
// console.log(unionFind.find(6));

// const testSet = new Set();
// const testSet2 = new Set();
// testSet.add(1);
// testSet.add(2);
// testSet2.add(3);

// console.log(testSet);
// console.log(testSet2);

// const newSet = new Set(testSet, testSet2);

// console.log(newSet, '2222');
