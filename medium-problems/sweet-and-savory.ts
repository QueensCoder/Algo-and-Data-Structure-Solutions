export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = dishes.length - 1;

  const result: number[] = [];
  const exitCaseResult = [0, 0];
  //   sweet is negative , savory is positive, result must include one of each
  //   exit if all sweet or all savory
  if (!dishes.some((dish) => dish < 0)) return exitCaseResult;
  else if (!dishes.some((dish) => dish > 0)) return exitCaseResult;

  const sweetDishes = dishes.filter((dish) => dish < 0);
  const savoryDishes = dishes.filter((dish) => dish > 0);

  //   console.log(dishes, '...');

  for (let i = 0; i < sweetDishes.length; i++) {
    let sweetDish = sweetDishes[i];

    for (let j = 0; j < savoryDishes.length; j++) {
      let savoryDish = savoryDishes[j];

      const potentialCombo = savoryDish + sweetDish;
      const currentCombo = result.reduce((a, b) => (a += b), 0);
      const potentialDiff = Math.abs(potentialCombo - target);
      const currentDiff = Math.abs(currentCombo - target);

      //   console.log(sweetDish, savoryDish, potentialDiff, currentDiff);

      if (
        !result.length ||
        (potentialCombo <= target && potentialDiff < currentDiff)
      ) {
        // && currentDiff > potentialDiff
        // console.log('can we get here');
        result[0] = sweetDish;
        result[1] = savoryDish;
      }
    }
  }
  return result;
}

console.log(sweetAndSavory([-3, -5, 1, 7], 8), [-3, 7]);

console.log(sweetAndSavory([-5, 10], 4), [-5, 10]);

console.log(sweetAndSavory([-3, -5, 1, 7], 0), [-3, 1]);
