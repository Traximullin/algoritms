{
    function countQuadruplets(nums: number[]): number {
        let c = 0;

        for (let i = 0; i < nums.length - 2; i++) {

            for (let j = i + 1; j < nums.length - 1; j++) {

                for (let k = j + 1; k < nums.length; k++) {

                    const is_valid = nums[i] < nums[j] || nums[j] < nums[k];

                    if (is_valid) {
                        const sum = nums[i] + nums[j] + nums[k]

                        if (sum === nums[k + 1])
                            c++

                    }

                }

            }

        }

        return c;
    };

    console.log(countQuadruplets([1,2,3,6]))
}