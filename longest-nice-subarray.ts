{

    function longestNiceSubarray(nums: number[]): number {
        let max = 1;
        let start = nums[0];
        let link = 1;

        let i = 0;

        while (link < nums.length) {
            if (start & nums[link])
                start ^= nums[i++];
            else {
                start |= nums[link++];
                max = Math.max(max, link - i)
            }
        }

        return max;
    };

    console.log(longestNiceSubarray([1,3,8,48,10]))

}