{
    function threeSumClosest(nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        let closest: number = nums[0] + nums[1] + nums[2];
        for (let i = 0; i < nums.length - 2; i++) {
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === target) {
                    return sum;
                }
                if(Math.abs(sum - target) < Math.abs(closest - target)) {
                    closest = sum;
                }
                if (sum < target) {
                    j++;
                } else {
                    k--;
                }

            }
        }

        return closest;
    };
}