function flatten(value) {
  //non nested examples
  const flattenedValues = [];
  for (let i = 0; i < value.length; i++) {
    let currentValue = value[i];
    if (!Array.isArray(currentValue)) {
      flattenedValues.push(currentValue);
    } else {
      let recursed = flatten(currentValue);
      flattenedValues.push(...recursed);
    }
  }

  return flattenedValues;
}

// Do not edit the line below.
console.log(flatten([1, [2, 3], 4, [5, [6]]])); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2]), 'test'); // [1, 2, 3, 4, 5, 6]
// console.log(
//   flatten({ a: 123, b: [1, 2, 3], c: { d: '123', e: ['a', 'b', [42]] } }),
// );

// console.log(flatten('123')); // wee

exports.flatten = flatten;
