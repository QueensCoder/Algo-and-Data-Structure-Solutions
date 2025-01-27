export class UnionFind {
  tree: { [key: number]: Set<number> } = {};
  constructor() {
    this.tree = {};
  }

  createSet(value: number) {
    this.tree[value] = new Set();
    return null;
  }

  find(value: number) {
    if (this.tree[value]) return value;
    else {
      const foundKey = Object.keys(this.tree).find((key) =>
        this.tree[key].has(value),
      );
      return foundKey;
    }
  }

  union(valueOne: number, valueTwo: number) {
    const unionOne = this.tree[valueOne];
    const unionTwo = this.tree[valueTwo];

    console.log(unionOne, unionTwo);
    if (!unionTwo) {
      unionOne.add(valueTwo);
    } else {
      this.tree[valueOne] = new Set([...unionOne, ...unionTwo, valueTwo]);
      delete this.tree[valueTwo];
    }

    return null;
  }
}

const unionFind = new UnionFind();
console.log(unionFind.createSet(3));
console.log(unionFind.createSet(6));
console.log(unionFind.union(3, 6));
console.log(unionFind.find(6));
// console.log(unionFind.find(3));
// console.log(unionFind.createSet(2));
// console.log(unionFind.union(2, 6));

// const testSet = new Set();
// const testSet2 = new Set();
// testSet.add(1);
// testSet.add(2);
// testSet2.add(3);

// console.log(testSet);
// console.log(testSet2);

// const newSet = new Set(testSet, testSet2);

// console.log(newSet, '2222');
