export function oneEdit(stringOne: string, stringTwo: string) {
  let diffs = 0;

  let stringOnePointer = 0;
  let stringTwoPointer = 0;

  const maxChars =
    stringOne.length >= stringTwo.length ? stringOne.length : stringTwo.length;

  while (stringOnePointer < maxChars || stringTwoPointer < maxChars) {
    let stringOneChar = stringOne[stringOnePointer];
    let stringTwoChar = stringTwo[stringTwoPointer];

    if (stringOneChar !== stringTwoChar) {
      // difference found
      diffs++;

      let nextCharStringOne = stringOne[stringOnePointer + 1];
      let nextCharStringTwo = stringTwo[stringTwoPointer + 1];

      //   move either pointer forward if the next characters don't match
      if (nextCharStringOne !== nextCharStringTwo) {
        if (nextCharStringOne === stringTwoChar) {
          stringOnePointer++;
        } else if (nextCharStringTwo === stringOneChar) {
          stringTwoPointer++;
        }
      }
    }

    stringOnePointer++;
    stringTwoPointer++;
  }

  // max number of differences allowed are 1
  return diffs <= 1;
}

// console.log(oneEdit('hello', 'hallo'));
// console.log(oneEdit('a', 'a'));
// console.log(oneEdit('abc', 'b'));
console.log(oneEdit('ab', 'b'));
console.log(oneEdit('ba', 'bb'));
// console.log(
//   oneEdit('abdefghijklmnopqrstuvwxyz', 'bcdefghijklmnopqrstuvwxyz'),
//   'should be false',
// );
