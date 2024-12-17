function flatten(value) {
  let flattendObject = {};
  const flattenedArray = [];

  // if (typeof value !== 'object' && !Array.isArray(value)) {
  //   return value;
  // }

  //non nested examples
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      let currentValue = value[i];
      if (!Array.isArray(currentValue)) {
        flattenedArray.push(currentValue);
      } else {
        let recursed = flatten(currentValue);
        flattenedArray.push(...recursed);
      }
    }

    return flattenedArray;
  }

  if (typeof value === 'object') {
    for (let key in value) {
      let currentValue = value[key];
      if (typeof currentValue !== 'object' && !Array.isArray(currentValue)) {
        flattendObject[key] = currentValue;
      } else {
        flattendObject = { ...flattendObject, ...flatten(currentValue) };
      }
    }
    return flattendObject;
  }
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
