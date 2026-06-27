function maximumLength(nums: number[]): number {
  const count = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  const ones = count.get(1) ?? 0;
  let best = ones % 2 === 1 ? ones : Math.max(ones - 1, 1);

  for (const start of count.keys()) {
    if (start === 1) {
      continue;
    }

    let current = start;
    let length = 0;

    while (count.has(current)) {
      best = Math.max(best, length + 1);

      if ((count.get(current) ?? 0) < 2) {
        break;
      }

      length += 2;

      if (current > Math.floor(1e9 / current)) {
        break;
      }

      current *= current;
    }
  }

  return best;
}
