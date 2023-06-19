{
    const removeElement = function(nums, val) {
        // return nums.filter(num => num !== val)
    
        while(nums.indexOf(val) !== -1) {
            nums.splice(nums.indexOf(val),1)
        }

        return nums
    };

    console.log(removeElement([3,2,2,3],3))
}