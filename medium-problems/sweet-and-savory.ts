export function sweetAndSavory(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);
  console.log(dishes);
  let pointerOne = 0;
  let pointerTwo = dishes.length - 1;

  const result = [0, 0];
  //   sweet is negative , savory is positive, result must include one of each
  //   exit if all sweet or all savory
  if (!dishes.some((dish) => dish < 0)) return result;
  else if (!dishes.some((dish) => dish > 0)) return result;

  const sweetDishes = dishes.filter((dish) => dish < 0);
  const savoryDishes = dishes.filter((dish) => dish > 0);

  for (let i = 0; i < sweetDishes.length; i++) {
    let sweetDish = sweetDishes[i];

    for (let j = 0; j < savoryDishes.length; j++) {
      let savoryDish = savoryDishes[j];

      const currentTarget = result.reduce((prev, curr) => (prev += curr));
      const potentialTarget = sweetDish + savoryDish;
      console.log(currentTarget, potentialTarget, sweetDish, savoryDish);
    }
  }
}

const dishes = [-3, -5, 1, 7];
const target = 8;
const expected = [-3, 7];

console.log(sweetAndSavory(dishes, target));
