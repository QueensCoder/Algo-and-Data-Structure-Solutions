export function firstNonRepeatingCharacter(string: string) {
  let returnIdx = -1;
  //   O(1) space because of input string has max 26 possibilities only (alpha)
  //   O(n) space if we allowed all characters
  const hash: { [key: string]: number } = {};

  //   O(n) time
  string.split('').forEach((char) => {
    hash[char] = hash[char] + 1 || 1;
  });

  //   O(n) time
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] === 1) {
      returnIdx = i;
      break;
    }
  }

  return returnIdx;
}

console.log(firstNonRepeatingCharacter('abcdcaf'), '1'); // 1
console.log(firstNonRepeatingCharacter('abacabad'), '2'); // 2
