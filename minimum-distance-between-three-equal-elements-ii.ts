function minimumDistance(nums: number[]): number {
  const n: number = nums.length;
  const last: number[] = new Array(n + 1).fill(-1);
  const second: number[] = new Array(n + 1).fill(-1);
  let minDist: number = Infinity;

  for (let i = 0; i < n; i++) {
    const num: number = nums[i];
    if (second[num] !== -1) {
      const dist: number = i - second[num];
      if (dist < minDist) {
        minDist = dist;
      }
    }
    second[num] = last[num];
    last[num] = i;
  }

  return minDist === Infinity ? -1 : 2 * minDist;
}
