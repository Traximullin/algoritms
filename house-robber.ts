{
    var rob = function(nums) {
        if (nums.length <= 2) 
            return Math.max(...nums)

        let first = Math.max(nums[0], nums[1]),
            second = nums[0];
        
        for(let i = 2; i < nums.length; ++i) {
            const current = Math.max(first, second + nums[i]);

            second = first;
            first = current;
        }

        return first
    };


    console.log(rob([2,7,9,3,1]))
}