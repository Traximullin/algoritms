{
    function countPartitions(nums: number[]): number {
        let num = nums[0]; 
        let sum = nums.reduce((prev, next) => prev += next, 0) - num;
        let i = 1;

        let c = 0;

        while (i < nums.length) {
            if (!((num - sum) % 2))
                c += 1;
            
            num += nums[i];
            sum -= nums[i];
            i++;
        }

        return c;
    };

    console.log(countPartitions([10,10,3,7,6]))
}