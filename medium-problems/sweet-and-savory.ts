// O(n * m) time, O(n) space, brute force approach
export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);

  const result: number[] = [];
  const exitCaseResult = [0, 0];
  //   sweet is negative , savory is positive, result must include one of each
  //   exit if all sweet or all savory
  if (!dishes.some((dish) => dish < 0)) return exitCaseResult;
  else if (!dishes.some((dish) => dish > 0)) return exitCaseResult;

  const sweetDishes = dishes.filter((dish) => dish < 0);
  const savoryDishes = dishes.filter((dish) => dish > 0);

  for (let i = 0; i < sweetDishes.length; i++) {
    let sweetDish = sweetDishes[i];

    for (let j = 0; j < savoryDishes.length; j++) {
      let savoryDish = savoryDishes[j];

      const potentialCombo = savoryDish + sweetDish;
      const currentCombo = result.reduce((a, b) => (a += b), 0);
      const potentialDiff = Math.abs(potentialCombo - target);
      const currentDiff = Math.abs(currentCombo - target);

      //   if no result OR combo is valid AND the potential diff is less than the current difference
      if (
        !result.length ||
        (potentialCombo <= target && potentialDiff < currentDiff)
      ) {
        result[0] = sweetDish;
        result[1] = savoryDish;
      }
    }
  }
  const currTotal = result.reduce((prev, curr) => (prev += curr), 0);
  if (currTotal > target) return exitCaseResult;
  return result;
}

console.log(sweetAndSavory([-3, -5, 1, 7], 8), [-3, 7]);

console.log(sweetAndSavory([-5, 10], 4), [-5, 10]);

console.log(sweetAndSavory([-3, -5, 1, 7], 0), [-3, 1]);

console.log(
  sweetAndSavory([17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], -100),
  [0, 0],
);
