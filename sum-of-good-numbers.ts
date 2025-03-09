{
    function sumOfGoodNumbers(nums: number[], k: number): number {
        let c = 0;

        for (let i = 0; i < nums.length; i++) {
            const prev = nums[i - k] ?? -1;
            const next = nums[i + k] ?? -1;
            const curr = nums[i];

            if (curr > prev && curr > next)
                c += curr;

        }

        return c;
    };

    console.log(sumOfGoodNumbers([1,3,2,1,5,4], 2))
}