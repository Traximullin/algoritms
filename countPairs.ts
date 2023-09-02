{
    const countPairs = function(nums, target) {
        let count = 0;

        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(i < j && nums[i] + nums[j] < target) {
                    count++
                }
            }
        }

        return count
    };

    console.log(countPairs([-6,2,5,-2,-7,-1,3], 2))
}