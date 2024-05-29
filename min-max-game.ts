{
    const minMaxGame = function(nums) {
        if (nums.length === 1) 
            return nums[0]
        if (nums.length === 2) 
            return Math.min(...nums);

        const new_nums = [];

        for (let i = 0; i < nums.length; i += 4) {
            const min_value = Math.min(nums[i], nums[i + 1])
            const max_valie = Math.max(nums[i + 2], nums[i + 3])
        
            new_nums.push(min_value, max_valie)
        }

        return minMaxGame(new_nums)
    };

    console.log(minMaxGame([1,3,5,2,4,8,2,2]))
}