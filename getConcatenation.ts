{
    const getConcatenation = function(nums) {
        const length = nums.length
        for(let i = 0; i < length; i++) {
            nums.push(nums[i])
        }
        return nums
    };

    console.log(getConcatenation([1,2,3]))
}