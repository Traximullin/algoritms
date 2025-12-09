function specialTriplets(nums: number[]): number {
    const MOD = 1e9 + 7;
    let count = 0;
    const totalCounts = new Map<number, number>();

    const leftCounts = new Map<number, number>();
    for(const n of nums) {
        totalCounts.set(n, totalCounts.get(n) + 1 || 1)
    }
    for(let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const target = cur * 2;
        
        const leftCount = leftCounts.get(target) ?? 0;
        leftCounts.set(cur, leftCounts.get(cur) + 1 || 1);

        const rightCount = (totalCounts.get(target) ?? 0) - (leftCounts.get(target) ?? 0);
        count = (count + leftCount * rightCount) % MOD;

    }
    
    return count;
};