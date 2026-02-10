function longestBalanced(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const evenSet = new Set<number>();
    const oddSet = new Set<number>();

    for (let j = i; j < n; j++) {
      const val = nums[j];

      if (val % 2 === 0) {
        evenSet.add(val);
      } else {
        oddSet.add(val);
      }

      if (evenSet.size === oddSet.size) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
}
