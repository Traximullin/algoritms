{
    function maxSubsequence(nums: number[], k: number): number[] {
        if (nums.length == k)
            return nums;

        nums.sort((a,b) => a - b);

        return nums.splice(-k)
    };

    console.log(maxSubsequence([-1,-2,3,4], 3))
}