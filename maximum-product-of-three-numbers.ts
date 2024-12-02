function maximumProduct(nums: number[]): number {
    nums.sort((a,b) => b - a);

    const start = nums[0] * nums[1] * nums[2];
    const end = nums.at(-1)! * nums.at(-2)! * nums[0];

    return Math.max(start, end);
};

console.log(maximumProduct([-100,-98,-1,2,3,4]))