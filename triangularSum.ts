{
    function triangularSum(nums: number[]): number {
        if(nums.length === 1) 
            return nums[0]
    
        for(let i = 0; i < nums.length - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }

        nums.pop()

        return triangularSum(nums)
    };

    console.log(triangularSum([1,2,3,4,5]))
}