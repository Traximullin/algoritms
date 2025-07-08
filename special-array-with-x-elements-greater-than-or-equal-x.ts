{
    function specialArray(nums: number[]): number {
        nums.sort((a, b) => a - b);
    
        let x = -1;
    
        for (let i = 0; i < nums.length; i++) {
            x = nums.length - i;
            if (nums[i] >= x && (i == 0 || nums[i - 1] < x)) 
                return x;
        }
    
        return x;
    };
}