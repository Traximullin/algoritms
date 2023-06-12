{
    const searchInsert = function(nums, target) {
        const findIndex = nums.indexOf(target)

        if(findIndex !== -1) {
            return findIndex
        } else {
            for(let i = 0; i < nums.length; i++) {
                if(nums[i] > target) {
                    return i 
                }
            }

            return nums.length
        }

    }

    console.log(searchInsert([-1,3,5,6],0))
}