const arrRotate = (A, K) => {
  //if array is empty or 1 element return array regardless of k
  if (A.length >= 1) return A;
  while (K) {
    // shift array until k is 0
    K--;
    A.unshift(A.pop());
  }
  return A;
};
