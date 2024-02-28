{
    const numberGame = function(nums) {
        nums.sort((a,b) => a - b)

        for(let i = 0; i < nums.length; i += 2) {
            const prev = nums[i]
            const next = nums[i + 1]

            nums[i + 1] = prev;
            nums[i] = next;
        }

        return nums
    };

    console.log(numberGame([5,4,2,3]))
    console.log(numberGame([2,5]))
}