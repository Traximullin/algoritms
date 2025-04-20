{
    function numberOfArithmeticSlices(nums: number[]): number {
        let c = 0;

        if (nums.length < 3) 
            return c;

        let left = 0;
        let diff = nums[1] - nums[0];

        for (let right = 2; right < nums.length; right++) {
            const local_diff = nums[right] - nums[right - 1];

            if (local_diff === diff) {
                c += 1;

                if (right - left > 2) {
                    c = c + right - left - 2;
                }
            } else {
                left = right;
            }

            diff = local_diff;
        }

        return c;
    };

    console.log(numberOfArithmeticSlices([1,2,3,4,5,6]))
}