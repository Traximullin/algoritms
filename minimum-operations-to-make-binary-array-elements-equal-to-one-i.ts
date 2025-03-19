{
    function helper(nums: number[], index: number): void {
        nums[index] = nums[index] === 0 ? 1 : 0;
    }


    function minOperations(nums: number[]): number {
        let c = 0;
    
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] == 0) {
                helper(nums, i)
                helper(nums, i + 1)
                helper(nums, i + 2)
                
                c += 1;
            }
        }

        if(nums.at(-1) == 0 || nums.at(-2) == 0 ) {
            return -1
        }

        return c;
    };
    
    console.log(minOperations([0,1,1,1]))


}