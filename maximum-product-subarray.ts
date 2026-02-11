function maxProduct(nums: number[]): number {
  if (nums.length === 0) return 0;

  let dp = [{ min: nums[0], max: nums[0] }];

  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    let calc1 = dp[i - 1].max * num;
    let calc2 = dp[i - 1].min * num;

    let currMax = Math.max(num, calc1, calc2);

    maxProduct = Math.max(maxProduct, currMax);

    dp[i] = {
      max: currMax,
      min: Math.min(num, calc1, calc2),
    };
  }

  return maxProduct;
}
