{
    function maxAdjacentDistance(nums: number[]): number {
        let max = Math.abs(nums[0] - nums.at(-1));

        for (let i = 1; i < nums.length; i++) {
            const abs_sum = Math.abs(nums[i - 1] - nums[i]);

            max = Math.max(abs_sum, max);
        }

        return max;
    };
    console.log(maxAdjacentDistance([1,2,4]))
}