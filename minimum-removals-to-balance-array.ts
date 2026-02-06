function minRemoval(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let maxWindowSize = 1;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    const rightNum = nums[right];

    while (rightNum > nums[left] * k) {
      left++;
    }

    maxWindowSize = Math.max(maxWindowSize, right - left + 1);
  }

  return nums.length - maxWindowSize;
}
