export function commonCharacters(strings: string[]) {
  const sets = strings.map((str) => new Set(str.split('')));
  console.log(sets);
  return [];
}

console.log(commonCharacters(['abc', 'efg', 'hij'])); // []

console.log(commonCharacters(['b', 'ccb', 'abc'])); // ['b', 'c']
