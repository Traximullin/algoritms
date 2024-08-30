{
    function getFinalState(nums: number[], k: number, multiplier: number): number[] {
        while(k) {
            let index_min = 0;
            let min = nums[0];

            for (let i = 1; i < nums.length; i++) {
                if (nums[i] < min) {
                    index_min = i;
                    min = nums[i];
                }
            };
            nums[index_min] *= multiplier;
            k--;
        }

        return nums;
    };

    console.log(getFinalState([2,1,3,5,6], 5, 2))
}