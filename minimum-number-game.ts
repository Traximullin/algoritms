{
    // TODO
    const numberGame = function(nums) {
        nums.sort();

        for(let i = 0; i < nums.length - 1; i += 2) {
            const prev = nums[i]
         
            nums[i] = nums[i + 1]
            nums[i + 1] = prev
        }

        return nums
    };

    console.log(numberGame([5,4,2,3]))
}