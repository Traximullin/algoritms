function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;
  const res: number[][] = [];

  if (n < 4) {
    return res;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j += 1) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      const aim = target - (nums[i] + nums[j]);
      let l = j + 1,
        r = n - 1;
      while (l < r) {
        const subS = nums[l] + nums[r];
        if (subS === aim) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l += 1;
          r -= 1;

          while (l < r && nums[l] === nums[l - 1]) {
            l += 1;
          }
          while (l < r && nums[r] === nums[r + 1]) {
            r -= 1;
          }
        } else if (subS < aim) {
          l += 1;
        } else {
          r -= 1;
        }
      }
    }
  }

  return res;
}
