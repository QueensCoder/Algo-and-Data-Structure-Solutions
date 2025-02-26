const getCharCount = (word: string) => {
  return word
    .split('')
    .reduce((prev: { [key: string]: number }, curr: string) => {
      if (prev[curr]) prev[curr] += 1;
      else prev[curr] = 1;
      return prev;
    }, {});
};

export function oneEditBruteForce(stringOne: string, stringTwo: string) {
  const stringOneHash = getCharCount(stringOne);
  const stringTwoHash = getCharCount(stringTwo);

  const maxDifferences = 1;
  let currDifferences = 0;

  const longer =
    stringOne.length >= stringTwo.length ? stringOneHash : stringTwoHash;
  const shorter =
    stringOne.length < stringTwo.length ? stringOneHash : stringTwoHash;

  for (let key in longer) {
    let longerValue = longer[key];
    let shorterValue = shorter[key];
    console.log(longerValue, shorterValue, key);
    if (currDifferences > maxDifferences) return false;

    if (longerValue !== shorterValue) currDifferences++;
  }
  return maxDifferences >= currDifferences;
}

// console.log(oneEditBruteForce('hello', 'hallo'));
// console.log(oneEditBruteForce('a', 'a'));
console.log(oneEditBruteForce('abc', 'b'));
