{
    function minimumRightShifts(nums: number[]): number {
        let c = 0;
        let p = nums.length;

        for(let i = 0; i < nums.length - 1; i++)
            if(nums[i] > nums[i + 1]) {
                p = i + 1;
                c++;
            }

        if(nums.at(-1) > nums[0]) 
            c++;

        return c > 1 ? -1 : nums.length - p;
    };
    console.log(minimumRightShifts([3,4,5,1,2]))
}