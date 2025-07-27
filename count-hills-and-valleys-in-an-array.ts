{
    function countHillValley(nums: number[]): number {
        let a = nums[0];
        let b = a;
        let ans = 0;

        for (const c of nums) {
            if (c === b) continue;

            if (c > b) {
            if (b < a) ++ans; 
            } else {
            if (b > a) ++ans; 
            }
            
            a = b;
            b = c;
        }

        return ans;
    }
}