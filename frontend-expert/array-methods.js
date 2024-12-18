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
  if (!this.length) return initialValue;
  const hasInitialValue = initialValue || initialValue === 0;
  let accumulator = hasInitialValue ? initialValue : this[0];
  let i = hasInitialValue ? 0 : 1;

  for (i; i < this.length; i++) {
    const currentValue = this[i];
    accumulator = callback(accumulator, currentValue, i, this);
  }
  return accumulator;
};

// console.log([1, 2, 3].myMap((x) => x * 2)); // [2, 4, 6]

// console.log([1, 2, 3].myFilter((x) => x > 1)); // [2, 3]

console.log(
  [1, 2, 3].myReduce((acc, curr, i, obj) => {
    // console.log(i, 'whats i');
    return acc + curr;
  }, 0),
);
// 6
// console.log([1, 2, 3].myReduce((acc, curr) => acc + curr)); // 6

// console.log([1, 2, 3].myReduce((acc, curr) => acc + curr, [])); // [1, 2, 3]
