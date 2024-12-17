function flattenArray(arr) {
  if (arr === null || !Array.isArray(arr)) return arr;
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenArray(item));
    } else if (!Array.isArray(item) && typeof item === 'object') {
      return acc.concat(flattenObject(item));
    }
    return acc.concat(item);
  }, []);
}

function flattenObject(obj) {
  let result = {};
  if (obj === null || typeof obj !== 'object') return obj;

  for (const key in obj) {
    let value = obj[key];
    if (!Array.isArray(value) && typeof value === 'object') {
      let flattendObj = flattenObject(value);
      result = { ...result, ...flattendObj };
    } else if (Array.isArray(value)) {
      let flattendArr = flattenArray(value);
      result = { ...result, [key]: flattendArr };
    } else {
      result[key] = value;
    }
  }
  return result;
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
