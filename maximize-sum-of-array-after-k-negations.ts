{
    function largestSumAfterKNegations(nums: number[], k: number) {
        nums.sort((a, b) => a - b); 

        let i = 0;

        while (i < nums.length && i < k && nums[i] < 0) 
            nums[i++] *= -1;
        
        return nums.reduce((a, b) => a + b) -
            ((k - i) & 1) * 2 * nums.reduce((a, b) => Math.min(a, b));
    }
}