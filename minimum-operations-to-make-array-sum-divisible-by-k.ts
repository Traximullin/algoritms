function minOperations(nums: number[], k: number): number {
    return nums.reduce((sum, num) => sum + num, 0) % k;
}

console.log(minOperations)