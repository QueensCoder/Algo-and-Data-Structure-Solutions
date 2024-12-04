export function commonCharacters(strings: string[]) {
  const allChars = new Set(strings.join('').split(''));
  const totalWords = strings.length;
  const result: string[] = [];

  allChars.forEach((char) => {
    const currentMatches = strings.filter((word) => word.includes(char));
    if (currentMatches.length === totalWords) result.push(char);
  });

  return result;
}

console.log(commonCharacters(['abc', 'efg', 'hij'])); // []
console.log(commonCharacters(['b', 'ccb', 'abc'])); // ['b', 'c']
