{
    const leftRightDifference = function(nums) {
        let left = 0
        let rigth = nums.reduce((sum, curr) => sum += curr, 0)

        console.log(rigth)
        return nums.map((curr,index) => {
            rigth -= curr 
            const result = Math.abs(left - rigth)

            left += curr
            return result
        })

    };

 
    console.log(leftRightDifference([10,4,8,3]))
}