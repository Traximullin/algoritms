{
    const returnToBoundaryCount = function (nums) {
        let antReturnsToBoundary = 0;
        let sum = nums[0];
    
        for (let i = 1; i < nums.length; i++) {
            sum += nums[i];
            if(sum === 0) antReturnsToBoundary++;
        }
    
        return antReturnsToBoundary;
    };
}