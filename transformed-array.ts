{
    function constructTransformedArray(nums: number[]): number[] {
        const result: number[] = [];
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            if (nums[i] !== 0) {
                let newIndex = ((i + nums[i]) % n + n) % n;  
                result.push(nums[newIndex]);
            } else {
                result.push(0);
            }
        }
        
        return result;
    };
}