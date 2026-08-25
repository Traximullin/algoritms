function missingMultiple(nums: number[], k: number): number {
  const set = new Set(nums);

  let i = 1;

  while (set.has(i * k)) i++;

  return i * k;
}
