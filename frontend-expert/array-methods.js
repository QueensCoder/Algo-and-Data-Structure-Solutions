Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let current = this[i];
    result.push(callback(current, i, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    // only if the callback returns true, push the current element to the result array, not if truthy
    // truthy is not the same as true
    if (callback(this[i], i, this) === true) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  // Write your code here.
};

console.log([1, 2, 3].myMap((x) => x * 2)); // [2, 4, 6]

console.log([1, 2, 3].myFilter((x) => x > 1)); // [2, 3]
