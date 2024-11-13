{
    const isGood = (nums: number[]): boolean => {
        nums.sort((a, b) => a - b);

        const length = nums.length;

        for(let i = 0; i < length - 1; i++) {
            if(nums[i] !== i + 1) return false;
        }

        if(nums[length - 1] !== nums[length - 2]) 
            return false;
    
        return true;
    
    };
}
