{
    // !TODO 
    // https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
    const countPairs = function(nums, target) {
        let result = 0;
        nums.sort((a,b) => a - b)
        console.log(nums)
        for(let i = 1; i < nums.length; i++) {
            if(nums[0] + nums[i] < target) {
                result++
            }
        }

        return result
    };

    console.log(countPairs([-6,2,5,-2,-7,-1,3], 2))
}