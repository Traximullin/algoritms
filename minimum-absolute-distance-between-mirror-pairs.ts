function minMirrorPairDistance(nums: number[]): number {
  let result = Infinity;
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const reverseNum = Number(String(nums[i]).split("").reverse().join(""));

    if (map.has(nums[i])) {
      result = Math.min(result, i - map.get(nums[i])!);
    }

    map.set(reverseNum, i);
  }

  return result === Infinity ? -1 : result;
}
