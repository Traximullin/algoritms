{
    function checkPossibility(nums: number[]): boolean {
        let c = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                c += 1;
                
                if (i > 0 && nums[i - 1] > nums[i + 1]) 
                    nums[i + 1] = nums[i];
                else 
                    nums[i] = nums[i + 1];
            }
        }

        return c <= 1;
    };

    console.log(checkPossibility([3,4,2,3]))
    
}