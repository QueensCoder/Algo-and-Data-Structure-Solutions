export function arrayOfProductsBruteFource(array: number[]) {
  const res: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) product *= array[j];
    }
    res.push(product);
  }
  return res;
}

console.log(arrayOfProductsBruteFource([5, 1, 4, 2])); // [8, 40, 10, 20]
