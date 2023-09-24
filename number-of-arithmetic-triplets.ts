{
    const arithmeticTriplets = function(nums, diff) {
        let count = 0
        const hash = new Set();

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if(hash.has(num - diff) && hash.has(num - diff - diff)) {
                count++
            } 

            hash.add(num)
        }

        return count
    };   

    console.log(arithmeticTriplets([0,1,4,6,7,10], 3))
}