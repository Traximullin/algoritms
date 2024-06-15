{
    // todo 
    function dominantIndex(nums: number[]): number {
        const max = Math.max(...nums);
        let max_index = -1;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            
            if (num === max) {
                max_index = i
            }

            if (num < )

        }


        return max_index
    };

    console.log(dominantIndex([3,6,1,0]))
}