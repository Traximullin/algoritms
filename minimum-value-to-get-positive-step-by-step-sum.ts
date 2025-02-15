{
    function minStartValue(nums: number[]): number {
        let min = 0;
        let sum = 0;
    
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            min = Math.min(min, sum);
        }
    
        return 1 - min
    };
}