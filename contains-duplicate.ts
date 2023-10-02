{
    const containsDuplicate = function(nums) {
        const numsNotDuplicate = new Set(nums)

        return nums.length !== numsNotDuplicate.size
    };

    console.log(containsDuplicate([1,2,3,1]))
}