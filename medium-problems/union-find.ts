export class UnionFind {
  // key is node, value is parent of that node
  tree: { [key: number]: number | null } = {};

  constructor() {
    this.tree = {};
  }

  createSet(value: number) {
    if (this.tree[value] === undefined) this.tree[value] = null;
    return null;
  }

  find(value: number) {
    let parentNode = this.tree[value];
    if (parentNode === null) return value;
    if (parentNode === undefined) return null;

    let currentnode = value;
    while (parentNode !== null) {
      currentnode = parentNode;
      parentNode = this.tree[parentNode];
    }
    return currentnode;
  }

  union(valueOne: number, valueTwo: number) {
    let valueOneParent = this.tree[valueOne];
    let valueTwoParent = this.tree[valueTwo];

    if (valueOneParent === valueTwo || valueTwoParent === valueOne) return null;

    if (valueOneParent === undefined || valueTwoParent === undefined)
      return null;

    if (valueTwoParent === null) {
      this.tree[valueTwo] = valueOne;
      return null;
    }

    while (valueTwoParent !== null) {
      valueTwoParent = this.tree[valueTwoParent];
    }

    this.tree[valueTwo] = valueOne;

    return null;
  }
}

const unionFind = new UnionFind();
console.log(unionFind.createSet(0));
console.log(unionFind.createSet(1));
console.log(unionFind.find(0), 'should be 0');
console.log(unionFind.find(1), 'should be 1');
console.log(unionFind.union(0, 2));
console.log(unionFind.find(0), 'should be 0');
console.log(unionFind.find(1), 'should be 1');
console.log(unionFind.union(0, 1), 'ull');
console.log(unionFind.union(1, 0), 'null');
console.log('hello world');
// console.log(unionFind.find(0), 'should be 0....');
// console.log(unionFind.find(1), 'should be 0..');

// solved
// console.log(unionFind.createSet(10));
// console.log(unionFind.createSet(5));
// console.log(unionFind.find(10), 'should be 10');
// console.log(unionFind.find(5), 'should be 5');
// console.log(unionFind.union(10, 5));
// console.log(unionFind.find(10), 'should be 10');
// console.log(unionFind.find(5), 'should be 10');

// console.log(unionFind.tree);

// solved
// console.log(unionFind.createSet(0));
// console.log(unionFind.createSet(2));
// console.log(unionFind.union(0, 2));
// console.log(unionFind.createSet(3));
// console.log(unionFind.createSet(1));
// console.log(unionFind.union(1, 3));
// console.log(unionFind.find(0), 'should be 0');
// console.log(unionFind.find(1), 'should be 1');
// console.log(unionFind.find(2), 'should be 0');
// console.log(unionFind.find(3), 'should be 1');
// console.log(unionFind.union(3, 0));
// console.log(unionFind.find(0), 'should be 1');

// console.log(unionFind.tree);

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
