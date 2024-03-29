{
    const sumIndicesWithKSetBits = function(nums, k) {
        const len = nums.length;
        let count = 0;

        for (let i = 0; i < len; i += 1) {
            let num = i;
            let bits = 0;

            while (num) {
            if (num & 1) bits += 1;

            num >>= 1;
            }

            if (bits === k) count += nums[i];
        }

        return count;
    };

    console.log(sumIndicesWithKSetBits([5,10,1,5,2],1))
}