{
    function minSubsequence(nums: number[]): number[] {
        const r: number[] = [];

        const sum_nums = nums.reduce((prev,next) => prev + next, 0) / 2;
        let sum = 0;

        nums = nums.sort((a,b) => b - a);
        
        for (const num of nums) {

            if (sum <= sum_nums) {
                r.push(num)

                sum += num;
            }

        }

        return r;
    };

    console.log(minSubsequence([4,3,10,9,8]))
    console.log(minSubsequence([4,4,7,6,7]))
}