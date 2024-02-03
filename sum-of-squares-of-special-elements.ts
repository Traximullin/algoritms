{
    const sumOfSquares = function(nums) {
        let c = 0;
        const l = nums.length;

        for(let i = 0; i < l; i++) {
            if(l % (i + 1) == 0) {
                c += nums[i] ** 2
            }
        }

        return c
    };
    // console.log(sumOfSquares([1,2,3,4]))
    console.log(sumOfSquares([2,7,1,19,18,3]))
}