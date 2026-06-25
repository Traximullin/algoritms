function countMajoritySubarrays(nums: number[], target: number): number {
  let ans: number = 0;
  const sz = nums.length;

  nums.forEach((num, i) => {
    let cnt: number = 0;
    for (let j = i; j < sz; ++j) {
      cnt += nums[j] === target ? 1 : 0;
      const half = ((j - i + 1) / 2) | 0;
      ans += cnt > half ? 1 : 0;
    }
  });

  return ans;
}
