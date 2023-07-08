{
    /*
        !TODO
        https://leetcode.com/problems/permutations/
        Менять значение в ряде по итерациям
    */
    const permute = function(nums) {
    
        const result: number[][] = []

        for(let i = 0; i < 7; i++) {
            console.log(nums)
            nums = [...nums.splice(1,2), nums[0]]
        }

    }

    console.log(permute([1,2,3]))
}