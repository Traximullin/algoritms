{
    function applyOperations(nums: number[]): number[] {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                nums[i - 1] *= 2;
                nums[i] = 0;
            }
        }

        let zeros_index = -1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0 && zeros_index === -1) {
                zeros_index = i;
            }

            if (zeros_index !== -1 && nums[i] !== 0) {
                nums[zeros_index] = nums[i];
                nums[i] = 0;
                i = zeros_index;
                zeros_index = -1;

            }
        }

        // nums.sort((a, b) => b === 0 ? -1 : 0)

        return nums;
    };


    console.log(applyOperations([847,847,0,0,0,399,416,416,879,879,206,206,206,272]))
    // console.log(applyOperations([0,1]))
}