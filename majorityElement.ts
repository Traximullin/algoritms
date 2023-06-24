{
    const majorityElement = function(nums) {
        let count = 0
        let majority = nums[0]

        for(let i = 0; i < nums.length; i++) {
            if(count === 0) {
                majority = nums[i]
            }
            if(nums[i] === majority) {
                count++
            } else {
                count--
            }
        }

        return majority
        // nums = nums.sort((a,b) => a - b)
        // let maxLegth = -1
        // let result = 0

        // for(let num of nums) {
        //     const length = nums.lastIndexOf(num) - nums.indexOf(num)
        //     if(length > maxLegth) {
        //         maxLegth = length
        //         result = num
        //     }
        // }

        // return result
    };

    console.log(majorityElement([3,2,3]))
}