function solveQueries(nums: number[], queries: number[]): number[] {
  const lastSeen: Map<number, number> = new Map();
  const dist: number[] = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  const ans: number[] = [];

  for (let i = 0, n = nums.length; i < nums.length * 2; ++i) {
    const num = nums[i % nums.length];
    if (lastSeen.has(num)) {
      const curInd = i % n;
      const prevIndex = lastSeen.get(num)! % n;
      dist[curInd] = Math.min(dist[curInd], i - lastSeen.get(num)!);
      dist[prevIndex] = Math.min(dist[prevIndex], i - lastSeen.get(num)!);
    }
    lastSeen.set(num, i);
  }

  for (const q of queries) {
    ans.push(dist[q] >= nums.length ? -1 : dist[q]);
  }

  return ans;
}
