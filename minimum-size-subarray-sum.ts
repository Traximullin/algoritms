{
    function minSubArrayLen(target: number, nums: number[]): number {
        let min_len = Infinity;
        let sum = 0;
        let start = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            while (sum >= target) {
                min_len = Math.min(min_len, i - start + 1);
                sum -= nums[start];
                start += 1;
            }

        }

        return min_len === Infinity ? 0 : min_len;
    };

    console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
    console.log(minSubArrayLen(4, [1,4,4]))
    console.log(minSubArrayLen(11, [1,2,3,4,5]))
    console.log(minSubArrayLen(11,  [1,1,1,1,1,1,1,1]))
}