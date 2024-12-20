// return maximum profit that can be earned by completing as many jobs as allowable within a 7 day period
// deadline represents the day the job must be completed, deadline of 1 means the job must be completed now or else cannot be be used
// not all the jobs have to be completed, only the ones that will yield the most profit within the 7 day period

export function optimalFreelancing(jobs: Record<string, number>[]) {
  let totalPayment = 0;
  if (!jobs.length) return totalPayment;
  let sevenDays = 7;

  // get highest payout for each deadline
  const jobsWithDeadlinesAndPaymentsOrganized: Record<string, number> = {};
  jobs.forEach((job) => {
    const { deadline, payment } = job;
    console.log(deadline, payment);
    let currJob = jobsWithDeadlinesAndPaymentsOrganized[deadline];

    if (!currJob) jobsWithDeadlinesAndPaymentsOrganized[deadline] = payment;
    else if (currJob < payment) {
      jobsWithDeadlinesAndPaymentsOrganized[deadline] = payment;
    }
  });

  const deadlinesModified: Record<string, number>[] = [];

  Object.keys(jobsWithDeadlinesAndPaymentsOrganized).forEach((key) => {
    deadlinesModified.push({
      deadline: parseInt(key),
      payment: jobsWithDeadlinesAndPaymentsOrganized[key],
    });
  });

  deadlinesModified.sort((a, b) => a.deadline - b.deadline);

  console.log(deadlinesModified, '...');

  for (let i = 0; i < deadlinesModified.length; i++) {
    if (sevenDays === 0) break;
    sevenDays--;
    totalPayment +=
      deadlinesModified[i].deadline < sevenDays
        ? deadlinesModified[i].payment
        : 0;
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

console.log(
  optimalFreelancing([
    { deadline: 1, payment: 4 },
    { deadline: 1, payment: 3 },
    { deadline: 2, payment: 1 },
    { deadline: 3, payment: 2 },
    { deadline: 4, payment: 1 },
    { deadline: 4, payment: 2 },
    { deadline: 4, payment: 3 },
    { deadline: 5, payment: 4 },
    { deadline: 8, payment: 1 },
  ]),
); //16
