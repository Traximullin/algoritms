{
    function maxIncreasingSubarrays(nums: number[]): number {
        let prevK = 1, k = 1, max = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) k++;
            else {
                max = Math.max(max, Math.floor(k / 2), Math.min(prevK, k));
                prevK = k;
                k = 1;
            }
        }

        return Math.max(max, Math.floor(k / 2), Math.min(prevK, k));
    };
}