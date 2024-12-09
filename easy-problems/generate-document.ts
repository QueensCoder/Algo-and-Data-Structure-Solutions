export function generateDocument(characters: string, document: string) {
  const charHash: Record<string, number> = {};
  const docHash: Record<string, number> = {};

  characters.split('').forEach((char) => {
    charHash[char] = charHash[char] + 1 || 1;
  });

  document.split('').forEach((char) => {
    docHash[char] = docHash[char] + 1 || 1;
  });

  for (const key in docHash) {
    if (docHash[key] > charHash[key]) return false;
  }

  return true;
}

console.log(
  generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!'),
); //true
console.log(generateDocument('A', 'a')); //false
