{
    function isTrionic(nums: number[]): boolean {
        const n = nums.length;
        let p, q, i = 0;
        
        while (i + 1 < n && nums[i + 1] > nums[i]) {
            i++;
        }
        p = i;
        
        while (i + 1 < n && nums[i + 1] < nums[i]) {
            i++;
        }
        q = i;
        
        while (i + 1 < n && nums[i + 1] > nums[i]) {
            i++;
        }
        
        return i === n - 1 && p > 0 && q > p && q < n - 1;
    }
}