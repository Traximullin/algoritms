function leftRightDifference(nums: number[]): number[] {
  let total = 0,
    ans = [],
    { abs } = Math;

  nums.forEach((value) => {
    total += value;
  });

  let ls = 0,
    rs = total;

  for (let i = 0; i < nums.length; i++) {
    rs -= nums[i];
    ls += nums[i - 1] ? nums[i - 1] : 0;
    ans.push(abs(ls - rs));
  }

  return ans;
}
