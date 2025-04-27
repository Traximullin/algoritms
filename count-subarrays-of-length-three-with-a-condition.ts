{
    function countSubarrays(nums: number[]): number {
        let c = 0;

        for (let i = 2; i < nums.length; i++)
            if (nums[i - 2] + nums[i] === nums[i - 1] / 2) 
                c += 1;

        return c;
    };

    console.log(countSubarrays([1,2,1,4,1]))
}