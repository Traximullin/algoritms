{
    function minimumAverage(nums: number[]): number {
        nums.sort((a, b) => a - b);
        
        let r = Number.MAX_VALUE;

        for (let i = 0; ~~(i < nums.length / 2); i++) {

            const av = (nums[i] + nums[nums.length - 1 - i]) / 2;

            if (av < r) {
                r = av;
            }
        }

        return r;
    };

    console.log(minimumAverage([5,13,2,13,9,4,5,7,14,8,1,15]))
}