function flattenArray(arr) {
  return arr.reduce((acc, item) => acc.concat(flatten(item)), []);
}

function flattenObject(obj) {
  let returnObj = {};
  for (let key in obj) {
    let value = obj[key];
    const flattenValue = flatten(value);
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      returnObj = { ...returnObj, ...flattenValue };
    } else {
      returnObj[key] = flattenValue;
    }
  }
  return returnObj;
}

function flatten(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) return flattenArray(value);

  return flattenObject(value);
}
// Do not edit the line below.
console.log(flatten([1, [2, 3], 4, [5, [6]]])); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2]), 'test'); // [1, 2, 3, 4, 5, 6]

console.log(
  flatten({ a: 123, b: [1, 2, 3], c: { d: '123', e: ['a', 'b', [42]] } }),
);
console.log(flatten({ a: 1, b: { c: 2, d: 3 } }));

// console.log(flatten('123')); // wee

exports.flatten = flatten;
