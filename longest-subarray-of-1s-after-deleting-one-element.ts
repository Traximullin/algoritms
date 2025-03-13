{
    function longestSubarray(nums: number[]): number {
        let left = 0, 
            zero_count = 0, 
            max = 0;
    
        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === 0) zero_count++;
    
            while (zero_count > 1) {
                if (nums[left] === 0) zero_count--;

                left++;
            }
    
            max = Math.max(max, right - left);
        }
    
        return max;
    }

    console.log(longestSubarray([0,0,1,1]))   
}