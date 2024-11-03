{
    function sortColors(nums: number[]): void {
        const dp = new Array(3).fill(0);

        for (const num of nums) {
            dp[num] += 1;
        }

        let start = 0;

        for (let i = 0; i < dp.length; i++) {
            const new_array = Array.from({length: dp[i]}, () => i);

            nums.splice(start, dp[i], ...new_array);
            start += dp[i];
        }

    };

    console.log(sortColors([2,0,1]))
}