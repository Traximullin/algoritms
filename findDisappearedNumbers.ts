{
    const findDisappearedNumbers = function(nums) {
        nums = nums.sort()
        const result: number[] = []

        for(let i = nums.length - 1; i > 0; i--) {
            if(nums[i] === nums[i - 1]) {
                continue
            }

            if(nums[i] - 1 !== nums[i - 1]) {
                console.log(nums[i])
                console.log(nums[i - 1])

                for(let j = nums[i - 1] + 1; j < nums[i]; j++) {
                    result.push(j)
                }

            }
        }

        return result
    }

    // console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
    console.log(findDisappearedNumbers([1,1]))
}