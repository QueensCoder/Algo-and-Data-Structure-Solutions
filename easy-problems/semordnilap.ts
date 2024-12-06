export function semordnilap(words: string[]) {
  const wordSet = new Set(words);

  const result: string[][] = [];

  //   O(n * m)
  words.forEach((word) => {
    const reversedWord = word.split('').reverse().join('');
    if (wordSet.has(reversedWord) && word !== reversedWord) {
      result.push([word, reversedWord]);
      wordSet.delete(word);
    }
  });

  return result;
}

console.log(
  semordnilap(['dog', 'hello', 'desserts', 'test', 'god', 'stressed']),
); // [['dog', 'god'], ['desserts', 'stressed']]

console.log(
  semordnilap([
    'liver',
    'dog',
    'hello',
    'desserts',
    'evil',
    'test',
    'god',
    'stressed',
    'racecar',
    'palindromes',
    'semordnilap',
    'abcd',
    'live',
  ]),
); // [['dog', 'god'], ['desserts', 'stressed']]
