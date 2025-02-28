export function oneEditBruteForce(stringOne: string, stringTwo: string) {}

console.log(oneEditBruteForce('hello', 'hallo'));
console.log(oneEditBruteForce('a', 'a'));
console.log(oneEditBruteForce('abc', 'b'));
console.log(
  oneEditBruteForce('abdefghijklmnopqrstuvwxyz', 'bcdefghijklmnopqrstuvwxyz'),
  'should be false',
);
