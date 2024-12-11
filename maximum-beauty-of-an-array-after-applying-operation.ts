{
    function maximumBeauty(nums: number[], k: number): number {
        nums.sort((a,b) => a - b);
        
        let max = 0;

        for (let l = 0, r = 0; r < nums.length; r++) {
            while (nums[r] - nums[l] > 2 * k) l++;

            max = Math.max(max, r - l + 1);
        }

        return max;
    };

    console.log(52 - 21)

    console.log(maximumBeauty([4,6,1,2], 2))    
}