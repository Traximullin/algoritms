{
    const removeElement = function(nums, val) {
        return nums.filter(num => num !== val)
    };

    console.log(removeElement([3,2,2,3],3))
}