{
    function arraySign(nums: number[]) {
        let c = 1;

        for (let i = 0; i < nums.length; i++ ) {
            if (!nums[i]) 
                return 0

            c *= nums[i];

        }

        return c > 0 ? 1 : -1
    };

    console.log(arraySign([-1,-2,-3,-4,3,2,1]))
}