function getSum(nums: number[], p: number) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = (sum + nums[i])
    }
    return sum
}

function minSubarray(nums: number[], p: number): number {
    let hash = new Map([[0, -1]]),
        totalSum = getSum(nums, p),
        target = totalSum % p,
        minLen = nums.length,
        currSum = 0;
    if (target === 0) return 0;

    for (let i = 0; i < nums.length; i++) {
        currSum = (currSum + nums[i]) % p;
        let needed = (currSum - target + p) % p;
        if (hash.has(needed)) {
            minLen = Math.min(minLen, i - hash.get(needed));
        }
        hash.set(currSum, i);
    }
    return minLen === nums.length ? -1 : minLen
};