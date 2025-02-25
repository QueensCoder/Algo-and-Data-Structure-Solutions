export function bestSeat(seats: number[]) {
  if (seats.every((seat) => seat === 1)) return -1;
  return -1;
}

const seats = [1, 0, 1, 0, 0, 0, 1];

console.log(bestSeat(seats));
