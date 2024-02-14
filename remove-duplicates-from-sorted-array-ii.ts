{
    const removeDuplicates = function(nums) {
        let l = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== nums[i + 2]) {
                nums[l] = nums[i]
                l++
            }
        }

        console.log(nums)

        return l
        // const hash = new Map();

        // for(let i = 0; i < nums.length; i++) {
        //     if (hash.get(nums[i]) === 2) {
        //         nums.splice(i, 1)

        //         i -= 1
        //         continue
        //     }

        //     hash.set(nums[i], hash.get(nums[i]) + 1 || 1)
        // }
    };

    console.log(removeDuplicates([0,0,1,1,1,1,2,3,3])
}