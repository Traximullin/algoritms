{
    function minSubArrayLen(target: number, nums: number[]): number {
        const length = nums.length;
        nums.sort((a,b) => a - b);
        let c = 0;

        while (nums.length) {
            console.log(c)
            const sum = c + nums.at(-1);
            console.log(sum);
            if (sum === target) 
                return length - nums.length + 1;

            if (sum > target) {
                c += nums.shift()!;
            } else {
                c += nums.pop()!;
            }
        }

        return 0;
    };

    // console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
    // console.log(minSubArrayLen(4, [1,4,4]))
    console.log(minSubArrayLen(11, [1,2,3,4,5]))
    // console.log(minSubArrayLen(11,  [1,1,1,1,1,1,1,1]))
}