{
    const maximumCount = function(nums) {
        const result = {
            pos: 0,
            neg: 0,
        }

        for(const num of nums) {
            if (num > 0) {
                result.pos += 1
            }
            if (num < 0) {
                result.neg += 1
            }
        }

        return Math.max(result.pos,result.neg)
     };

    console.log(maximumCount([-2,-1,-1,1,2,3]))
}