export function reverseWordsInString(string: string) {
  const words: string[] = [];
  let currString = '';

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let nextChar = string[i + 1];

    if (currChar !== ' ') {
      currString += currChar;
      if (nextChar === ' ' || nextChar === undefined) {
        words.unshift(currString);
        currString = '';
      }
    } else {
      currString += currChar;
      if (nextChar !== ' ' || nextChar === undefined) {
        words.unshift(currString);
        currString = '';
      }
    }
  }

  return words.join('');
}

console.log(reverseWordsInString('dog 123  test')); //'test 123 dog'
