{
    const createTargetArray = function(nums, index) {
        const result: number[] = [];

        for(const i in nums) {
            result.splice(index[i], 0, nums[i])
        }

        return result
    };

    console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))
}