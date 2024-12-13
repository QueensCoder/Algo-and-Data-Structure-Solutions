/**
 *
 * O Nlog(n) time complexity
 * O(1) space complexity
 *
 * Approach, first sort the coins in ascending order then iterate through the coins
 * If the currentTotal + 1 is less than the current coin, return the currentTotal + 1
 * this means that the next value cannot be created given the current coins
 * Good excerise to understand sorting or manipulating arrays first before doing any calculations is helpful
 */
export function nonConstructibleChangeBruteForce(coins: number[]) {
  // sort coins ascending
  coins.sort((a, b) => a - b);
  let totalChange = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (totalChange + 1 < coin) return totalChange + 1;
    totalChange += coin;
  }
}

console.log(nonConstructibleChangeBruteForce([5, 7, 1, 1, 2, 3, 22]));
// console.log(nonConstructibleChangeBruteForce([2, 3]));
