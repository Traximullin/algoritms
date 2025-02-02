{
    function check(nums: number[]): boolean {
        let c = 0;

        if (nums[0] < nums.at(-1))
            c += 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                c += 1;
                if (c > 1) 
                    return false;
            }
        }

        return true;
    };
    
    console.log(check([3,4,5,1,2]))
    
}