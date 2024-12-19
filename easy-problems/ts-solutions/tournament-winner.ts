//competitions[0] = home team and competitions[1] = away team
//results[i] = 1 if home team won and 0 if away team won
//       ['HTML', 'C#'],     [0], C# won here

/**
 * Iterate through the competitions array and check the results array to see who won
 * compile a list of teams and their scores, any losers are disregarded, only focus on winners
 */

export function tournamentWinner(competitions: string[][], results: number[]) {
  const scores: { [key: string]: number } = {};
  competitions.forEach((competition, index) => {
    let res = results[index];
    let winner = res === 1 ? competition[0] : competition[1];
    console.log(winner);
    scores[winner] = scores[winner] ? scores[winner] + 3 : 3;
  });
  //   find the team with the highest score, highest score means most wins in the competition
  return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
}

console.log(
  tournamentWinner(
    [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ],
    [0, 0, 1],
  ),
  'Python',
);
