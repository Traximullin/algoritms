{
    function maxAbsoluteSum(nums: number[]): number {
        let min_sum = 0;
        let max_sum = 0;

        let prefix = 0;

        for (const num of nums) {
            prefix += num;

            min_sum = Math.min(min_sum, prefix);
            max_sum = Math.max(max_sum, prefix);
        }

        return max_sum - min_sum;
    };

    console.log(maxAbsoluteSum([1,-3,2,3,-4]))
}