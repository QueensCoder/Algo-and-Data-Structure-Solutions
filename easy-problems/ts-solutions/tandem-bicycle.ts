//must pair each red + blue shirt together
// returns the max possible total speed or min total speed for all the tandem bicycles being ridden based on the fastest parameter
// total speed = sum(speeds) of the tandem bicycle

// for fastest, sort red asc, and blue desc
// for slowest, sort red asc, and blue asc

// higher number dictates the speed of the tandem bicycle
// sorting these arrays will allow us to pair the fastest red shirt with the slowest blue shirt and the fastest blue shirt with the fastest red shirt

export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean,
) {
  // Write your code here.

  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

  return redShirtSpeeds.reduce((acc, redSpeed, index) => {
    let blueSpeed = blueShirtSpeeds[index];
    console.log(blueSpeed, redSpeed);
    return acc + (redSpeed > blueSpeed ? redSpeed : blueSpeed);
  }, 0);
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
