{
    // !TODO 
    // https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150
    const minSubArrayLen = function(target, nums) {
        nums.sort()

        let result = 0;
        let count = 0;
        for(let i = nums.length - 1; i > 0; i--) {
            if(count !== target) {
                count += nums[i]
                result++
            } else {
                break
            }
        }

        return result
    };

    console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
}