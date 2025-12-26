function bestClosingTime(customers: string): number {
  let currPenalty = 0;
  let minPenalty = 0;
  let minDay = 0;

  for (let i = 0; i < customers.length; i++) {
    let val = customers[i];
    if (val === "Y") {
      currPenalty -= 1;
    } else {
      currPenalty += 1;
    }

    if (currPenalty < minPenalty) {
      minPenalty = currPenalty;
      minDay = i + 1;
    }
  }
  return minDay;
}
