function maxTotalValue(nums: number[], k: number): number {
  let max = -Infinity,
    min = Infinity;
  for (const num of nums) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  return k * (max - min);
}
