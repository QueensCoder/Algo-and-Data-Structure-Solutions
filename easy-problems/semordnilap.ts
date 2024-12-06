export function semordnilap(words: string[]) {
  const wordSet = new Set(words);

  const result: string[][] = [];

  //   O(n * m)
  words.forEach((word) => {
    const reversedWord = word.split('').reverse().join('');
    if (wordSet.has(reversedWord)) {
      result.push([word, reversedWord]);
      wordSet.delete(word);
    }
  });

  return result;
}

console.log(
  semordnilap(['dog', 'hello', 'desserts', 'test', 'god', 'stressed']),
); // [['dog', 'god'], ['desserts', 'stressed']]
