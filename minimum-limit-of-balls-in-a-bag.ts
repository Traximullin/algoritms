{
    function helper(nums: number[], max: number, mid: number) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            count += Math.floor((nums[i] - 1) / mid)
        }
    
        return count <= max;
    }
    
    function minimumSize(nums: number[], maxOperations: number): number {
        let left = 0;
        let right = Math.max(...nums)
    
        while (left < right) {
            const mid = Math.floor((left+right)/2)
            if (helper(nums, maxOperations, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
    
        return left;
    };

    console.log(minimumSize([9], 2))
}