{
    const searchRange = function(nums, target) {
        const result = [nums.indexOf(target),nums.lastIndexOf(target)]

        return result
    };

    console.log(searchRange([5,7,7,8,8,10],8))
}