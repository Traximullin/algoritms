function maximumJumps(nums: number[], target: number): number {
  let dp = new Array(nums.length).fill(-Infinity);

  dp[0] = 0;

  let jumpToAllIndexes = (index: number) => {
    for (let j = index + 1; j < nums.length; j++) {
      let oppositeTarget = target * -1;
      let subtraction = nums[j] - nums[index];

      if (
        oppositeTarget <= subtraction &&
        subtraction <= target &&
        dp[j] < dp[index] + 1
      ) {
        dp[j] = dp[index] + 1;
        jumpToAllIndexes(j);
      }
    }
  };

  jumpToAllIndexes(0);

  return dp[nums.length - 1] === -Infinity ? -1 : dp[nums.length - 1];
}
