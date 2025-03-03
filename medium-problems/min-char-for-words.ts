export function minimumCharactersForWords(words: string[]) {
  const minCharsArray: string[] = [];
  const minCharHash: { [key: string]: number } = {};
  words.forEach((word) => {
    // iterate over each word and hash each char with a count
    let perWordHash: { [key: string]: number } = {};
    word.split('').forEach((char) => {
      if (perWordHash[char]) perWordHash[char]++;
      else perWordHash[char] = 1;
    });

    // determine the max count for each char such that each word can be made
    Object.entries(perWordHash).forEach(([char, count]) => {
      if (minCharHash[char]) {
        let currentMax = minCharHash[char];
        minCharHash[char] = Math.max(count, currentMax);
      } else {
        minCharHash[char] = count;
      }
    });
  });

  //   push all the characters into the array using repeat
  Object.entries(minCharHash).forEach(([char, count]) =>
    minCharsArray.push(char.repeat(count)),
  );

  //   split characters like tt to t t by join all then split
  return minCharsArray.join('').split('');
}

const words = ['this', 'that', 'did', 'deed', 'them!', 'a'];
const expected = ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!'];

console.log(minimumCharactersForWords(words));
