function robStreet(nums: number[], start: number, end: number): number {
  let first: number = nums[start];
  let second: number = Math.max(first, nums[start + 1]);
  let maxProfit: number = second;

  for (let i = start + 2; i < end; i++) {
    const profitIfRobbedHouse: number = first + nums[i];
    maxProfit = Math.max(profitIfRobbedHouse, maxProfit);
    first = second;
    second = maxProfit;
  }

  return maxProfit;
}

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const firstHouseBias: number = robStreet(nums, 0, nums.length - 1);
  const lastHouseBias: number = robStreet(nums, 1, nums.length);

  return Math.max(firstHouseBias, lastHouseBias);
}
