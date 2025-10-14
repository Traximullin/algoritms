{
    function hasIncreasingSubarrays(nums: number[], k: number): boolean {
        if (nums.length < 2 * k) return false;

        const lastIndex = nums.length - k;

        for (let i = 0, count = 0; i < lastIndex; ++i) {
            if (i === 0 || (nums[i - 1] < nums[i] && nums[i + k - 1] < nums[i + k])) {
                if (++count === k) return true;
            } else {
                count = 1;
            }
        }

        return false;
    };
}