{
    function triangleType(nums: number[]): string {
        const min = Math.abs(nums[0] - nums[1]); 
        const max = nums[0] + nums[1]; 

        if(nums[2] <= min || nums[2] >= max)
            return "none"

        if(nums[0] === nums[1] && nums[1] === nums[2])
            return "equilateral";

        if(nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) 
            return "isosceles";

        return "scalene";
    };
 
    console.log(triangleType([3,3,3]))
}