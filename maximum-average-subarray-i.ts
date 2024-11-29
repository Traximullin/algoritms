function findMaxAverage(nums: number[], k: number): number {
    let i = 0;
    let s = 0;
    let max = 0;

    while (i < nums.length) {
        s += nums[i];

        if (i < k) {
            max = s;
        } else {
            s -= nums[i - k];
            max = Math.max(s, max);
        }

        i += 1;
    }

    return max / k;
};

console.log(findMaxAverage([-1], 1))