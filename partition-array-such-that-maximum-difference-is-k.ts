{
    function partitionArray(nums, k) {
        nums.sort((a,b) => a - b);
        
        let c = 1;
        let start = nums[0];
        
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] - start > k) {
                c++;
                start = nums[i];
            }
        }

        return c;
    };
}