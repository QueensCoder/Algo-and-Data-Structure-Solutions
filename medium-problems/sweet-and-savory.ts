// O(n * m) time, O(n) space, brute force approach
export function sweetAndSavoryBruteForce(dishes: number[], target: number) {
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
  console.log(currTotal, target);
  if (currTotal > target) return exitCaseResult;
  return result;
}

// console.log(sweetAndSavoryBruteForce([-3, -5, 1, 7], 8), [-3, 7]);

// console.log(sweetAndSavoryBruteForce([-5, 10], 4), [-5, 10]);

// console.log(sweetAndSavoryBruteForce([-3, -5, 1, 7], 0), [-3, 1]);

// console.log(
//   sweetAndSavoryBruteForce(
//     [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52],
//     -100,
//   ),
//   [0, 0],
// );

// O(nlogn) time, O(n) space, optimal solution
export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);
  const sweetDishes = dishes.filter((dish) => dish < 0);
  const savoryDishes = dishes.filter((dish) => dish > 0);

  const exitCaseResult = [0, 0];
  if (!sweetDishes.length || !savoryDishes.length) return exitCaseResult;

  let sweetPointer = 0;
  let savoryPointer = 0;

  let best = null;
  const result = [sweetDishes[sweetPointer], savoryDishes[savoryPointer]];

  console.log(
    sweetDishes.length,
    sweetPointer,
    savoryDishes.length,
    savoryPointer,
  );
  while (
    sweetPointer < sweetDishes.length &&
    savoryPointer < savoryDishes.length
  ) {
    let sweetDish = sweetDishes[sweetPointer];
    let savoryDish = savoryDishes[savoryPointer];

    const potentialCombo = savoryDish + sweetDish;
    const currentCombo = result.reduce((a, b) => (a += b), 0);
    const potentialDiff = Math.abs(potentialCombo - target);
    const currentDiff = Math.abs(currentCombo - target);

    if (
      !result.length ||
      (potentialCombo <= target && potentialDiff < currentDiff)
    ) {
      result[0] = sweetDish;
      result[1] = savoryDish;
    }

    let currentFlavor = sweetDish + savoryDish;

    // if too sweet move savory index
    if (currentFlavor < 0) {
      savoryPointer++;
      //   console.log('too sweet');
      // else if too savory move sweet pointer
    } else if (currentFlavor > 0) {
      //   console.log('too savory');
      sweetPointer++;
    } else {
      break;
    }
  }

  const currTotal = result.reduce((prev, curr) => (prev += curr), 0);
  if (currTotal > target) return exitCaseResult;
  return result;
}

// console.log(sweetAndSavory([-3, -5, 1, 7], 8), [-3, 7], '--------');

console.log(sweetAndSavory([-5, 10], 5), [-5, 10]);

// console.log(sweetAndSavory([-3, -5, 1, 7], 0), [-3, 1]);

// console.log(
//   sweetAndSavory([17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52], -100),
//   [0, 0],
// );
