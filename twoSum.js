{
    const twoSum = function(nums, target) {
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1;j < nums.length; j++) {
                if(nums[i] + nums[j] === target) {
                    return [i,j]
                }
            }
        }

        return []
    };

    // const twoSum = function(nums, target) {
    //     console.log(nums)

    //     for(let i = 0;i < nums.length; i++) {
    //         console.log(nums[i])
    //     }
    // };

    console.log(twoSum([2,5,5,11], 10))
    // console.log(twoSum([3,2,4],6))
    // console.log(twoSum([3,3],6))
}