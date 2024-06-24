{
    function minimumSum(nums: number[]): number {
        let min = 151;

        for (let i = 0; i < nums.length - 2; i++) {

            for (let j = i + 1; j < nums.length - 1; j++) {

                for (let k = j + 1; k < nums.length; k++) {

                    if (nums[i] < nums[j] && nums[k] < nums[j]) {
                        const num = nums[i] + nums[j] + nums[k]

                        min = Math.min(min, num)
                    }
                        

                }

            }

        }

        return min === 151 ? -1 : min;
    };

    console.log(minimumSum([8,6,1,5,3]))
}