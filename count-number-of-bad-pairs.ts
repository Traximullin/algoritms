{
    function countBadPairs(nums: number[]): number {
        const map = { 
            [nums[0]]: 1 
        };

        let c = 0;

        for (let i = 1; i < nums.length; i++) {
          c += i - (map[nums[i] - i] || 0);
        
          if (map[nums[i] - i]) 
            map[nums[i] - i]++;
          else 
            map[nums[i] - i] = 1;
        }

        return c;
    }

    console.log(countBadPairs([4,1,3,3]))
}