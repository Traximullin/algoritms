{
    /*
        !TODO
        https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
    */
   
    const moveZeroes = function(nums) {
        let count = 0

        for(let i = 0; i  < nums.length; i++) {
            console.log(nums[i])
            if(nums[i] === 0) {
                nums.splice(i,1)
                count++
            }
        }
        console.log(nums)
        nums.push(...new Array(count).fill(0))
        console.log(nums)
    };

    console.log(moveZeroes([0,1,0]))
}