{
    function subarraySum(nums: number[]): number {
        let c = 0;

        for (let i = 0; i < nums.length; i++) {
          const start = Math.max(0, i - nums[i]);
          
          for (let j = start; j <= i; j++)
            c += nums[j];
        }
      
        return c;
      
    };

    console.log(subarraySum([2,3,1]))
}