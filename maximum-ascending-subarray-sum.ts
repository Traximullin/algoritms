{
    function maxAscendingSum(nums: number[]): number {
        let c , r;
        r = 0;
        c = nums[0];

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                c += nums[i]
            } else { 
                r = Math.max(c, r);
                c = nums[i];
            }
        }

        return Math.max(r, c);
    };

    console.log(maxAscendingSum([100,10,1]))
}