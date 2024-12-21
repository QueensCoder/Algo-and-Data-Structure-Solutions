// return maximum profit that can be earned by completing as many jobs as allowable within a 7 day period
// deadline represents the day the job must be completed, deadline of 1 means the job must be completed now or else cannot be be used
// not all the jobs have to be completed, only the ones that will yield the most profit within the 7 day period

export function optimalFreelancing(jobs: Record<string, number>[]) {
  let totalPayment = 0;
  if (!jobs.length) return totalPayment;
  let sevenDays = 7;

  // get highest payout for each deadline
  const jobsWithDeadlinesAndPaymentsOrganized: Record<string, number> = {};
  jobs.sort((a, b) => b.payment - a.payment);

  let i = 0;

  while (sevenDays > 0 && i < jobs.length) {
    let job = jobs[i];
    console.log(job);
    const { deadline, payment } = job;

    if (
      !jobsWithDeadlinesAndPaymentsOrganized[deadline] ||
      jobsWithDeadlinesAndPaymentsOrganized[deadline] < deadline
    ) {
      jobsWithDeadlinesAndPaymentsOrganized[deadline] =
        jobsWithDeadlinesAndPaymentsOrganized[deadline] + 1 || 1;
      totalPayment += payment;
    }

    i++;
    sevenDays--;
  }
  return totalPayment;
}

// console.log(optimalFreelancing([]));
// console.log(
//   optimalFreelancing([
//     { deadline: 1, payment: 2 },
//     { deadline: 1, payment: 1 },
//   ]),
// );

// 1 dead, 3 pay
// 2 dead, 3 pay
// 5 dead, 2 pay
// 6 dead, 4 pay
// 8 dead, 1 pay

// console.log(
//   optimalFreelancing([
//     { deadline: 8, payment: 1 },
//     { deadline: 6, payment: 4 },
//     { deadline: 1, payment: 2 },
//     { deadline: 1, payment: 3 },
//     { deadline: 2, payment: 3 },
//     { deadline: 5, payment: 2 },
//   ]),
// );

// console.log(
//   optimalFreelancing([
//     { deadline: 1, payment: 4 },
//     { deadline: 1, payment: 3 },
//     { deadline: 2, payment: 1 },
//     { deadline: 3, payment: 2 },
//     { deadline: 4, payment: 1 },
//     { deadline: 4, payment: 2 },
//     { deadline: 4, payment: 3 },
//     { deadline: 5, payment: 4 },
//     { deadline: 8, payment: 1 },
//   ]),
// ); //16

console.log(
  optimalFreelancing([
    { deadline: 2, payment: 2 },
    { deadline: 1, payment: 1 },
    { deadline: 2, payment: 1 },
  ]),
);
