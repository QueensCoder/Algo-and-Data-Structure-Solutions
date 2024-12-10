export function commonCharactersBrute(strings: string[]) {
  const allChars = new Set(strings.join('').split(''));
  const totalWords = strings.length;
  const result: string[] = [];

  allChars.forEach((char) => {
    const currentMatches = strings.filter((word) => word.includes(char));
    if (currentMatches.length === totalWords) result.push(char);
  });

  return result;
}

console.log(commonCharactersBrute(['abc', 'efg', 'hij'])); // []
console.log(commonCharactersBrute(['b', 'ccb', 'abc'])); // ['b', 'c']

export function commonCharacters(strings: string[]) {
  type Hash = {
    [key: string]: number;
  };
  const hash: Hash = {};

  //   total time complexity: O(n * m)
  //   total space complexity: O(m) - the length of the longest word

  //   O(n)
  strings.forEach((word) => {
    type WordSet = Set<string>;
    const wordSet: WordSet = new Set();

    // O(m)
    for (let i = 0; i < word.length; i++) {
      wordSet.add(word[i]);
    }

    // O(m)
    wordSet.forEach((char) => {
      if (hash[char]) hash[char]++;
      else hash[char] = 1;
    });
  });

  const result = Object.keys(hash).filter(
    (key) => hash[key] === strings.length,
  );
  return result;
}

console.log(commonCharacters(['abc', 'efg', 'hij'])); // []
console.log(commonCharacters(['b', 'ccb', 'abc'])); // ['b', 'c']
