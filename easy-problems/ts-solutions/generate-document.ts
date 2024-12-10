/**
 *
 * Approach
 * - Create a hash table for the characters and the document
 * if the document has more of a character than the characters, return false
 * else return true if no character has more occurences in the document than in the characters
 * space O(n + m) | time O(n + m) but can be simplified to O(n)
 */
export function generateDocument(characters: string, document: string) {
  const charHash: Record<string, number> = {};
  const docHash: Record<string, number> = {};

  //   O(m)
  characters.split('').forEach((char) => {
    charHash[char] = charHash[char] + 1 || 1;
  });

  //   O(n)
  document.split('').forEach((char) => {
    docHash[char] = docHash[char] + 1 || 1;
  });

  //   O(n)
  for (const key in docHash) {
    console.log(key, docHash[key], charHash[key]);
    if (docHash[key] > charHash[key] || !charHash[key]) return false;
  }

  return true;
}

console.log(
  generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!'),
); //true
console.log(generateDocument('A', 'a')); //false

console.log(generateDocument('helloworldO', 'hello wOrld')); // false
