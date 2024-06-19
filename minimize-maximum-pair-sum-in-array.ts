{
    function minPairSum(nums: number[]): number {
        nums = nums.sort((a,b) => a - b)

        let start = 0;
        let end = nums.length - 1,
            max = 0;

        while (start < end) {
            const sum = nums[start] + nums[end]

            if (sum > max) 
                max = sum

            start += 1;
            end -= 1;
        }

        return max;
    };

    console.log(minPairSum([3,5,2,3]))
}