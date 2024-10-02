{
    function firstMissingPositive(nums: number[]): number {
        const length = nums.length;
        const dp = Array(length + 1).fill(0);

        for (let i = 0; i < length; i++)
            if (nums[i] > 0 && nums[i] <= length) 
                dp[nums[i]] = 1;
    
        
        for (let i = 1; i <= length; i++) 
            if (dp[i] === 0) 
                return i;

        return length + 1;
    };

    console.log(firstMissingPositive([1,2,4,3]))
}