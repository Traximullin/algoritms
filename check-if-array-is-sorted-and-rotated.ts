{
    function check(nums: number[]): boolean {
        const min_index = nums.lastIndexOf(Math.min(...nums));
        
        let i = min_index;

        while (i !== nums.length - 1) {
            const key = i % nums.length;

            const isBig = !(nums[key] <= nums[(key + 1) % nums.length]);

            if (isBig) {
                return false
            } 
            i++;
        }

        return true;
    };
    
    console.log(check([1,2,3]))
    console.log(check([1,1,1]))
    
}