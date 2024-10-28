{
    function numSubarraysWithSum(nums: number[], goal: number): number {
        let c = 0;

        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                
                if (sum === goal) {
                    c += 1;
                }

                sum += nums[j];
            }

            if (sum === goal) {
                c += 1;
            }
        }

        return c;
    };

    console.log(numSubarraysWithSum([0,0,0,0,0], 0))
}