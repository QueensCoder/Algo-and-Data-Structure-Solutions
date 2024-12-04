export function arrayOfProductsBruteForce(array: number[]) {
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

// console.log(arrayOfProductsBruteForce([5, 1, 4, 2])); // [8, 40, 10, 20]

export function arrayOfProducts(array: number[]) {
  const leftRes: number[] = Array(array.length).fill(1);
  const rightRes: number[] = Array(array.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftRes[i] = leftProduct;
    leftProduct *= array[i];
  }

  let rightProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightRes[i] = rightProduct;
    rightProduct *= array[i];
  }

  return leftRes.map((_, i) => leftRes[i] * rightRes[i]);
}

console.log(arrayOfProducts([5, 1, 4, 2])); // [8, 40, 10, 20]
