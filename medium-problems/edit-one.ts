export function oneEdit(stringOne: string, stringTwo: string) {
  let diffs = 0;

  let stringOnePointer = 0;
  let stringTwoPointer = 0;

  const maxChars =
    stringOne.length >= stringTwo.length ? stringOne.length : stringTwo.length;

  //   if the shorter string has too few characters it automatically false

  while (stringOnePointer < maxChars || stringTwoPointer < maxChars) {
    let longerWordChar = stringOne[stringOnePointer];
    let shorterWordChar = stringTwo[stringTwoPointer];

    console.log(longerWordChar, shorterWordChar);

    if (longerWordChar !== shorterWordChar) {
      // difference found
      diffs++;
    }

    stringOnePointer++;
    stringTwoPointer++;
  }

  // max number of differences allowed are 1
  return diffs <= 1;
}

// console.log(oneEditBruteForce('hello', 'hallo'));
// console.log(oneEditBruteForce('a', 'a'));
// console.log(oneEditBruteForce('abc', 'b'));
console.log(
  oneEditBruteForce('abdefghijklmnopqrstuvwxyz', 'bcdefghijklmnopqrstuvwxyz'),
  'should be false',
);
