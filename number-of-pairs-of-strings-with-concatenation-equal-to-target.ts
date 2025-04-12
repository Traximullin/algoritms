{
    function numOfPairs(nums: string[], target: string): number {
        let r = 0;

        for (let i = 0; i < nums.length; i++) {

            for (let j = 0; j < nums.length; j++) {
                if (i === j)
                    continue;

                if (nums[i] + nums[j] === target)
                    r += 1;
            }
        }

        return r;
    };

    console.log(numOfPairs(["777","7","77","77"], "7777"))
}