{
    function findShortestSubArray(nums: number[]): number {
    const numberCount: {[key: number]: number[]} = {};
    const n: number = nums.length;

    for(let i = 0; i < n; i++) {
        if (numberCount[nums[i]] == null) numberCount[nums[i]] = [i];
        else numberCount[nums[i]].push(i);
    }

    let res: number = n;
    let maxFre: number = 0;

    for(const key in numberCount) {
        const f: number = numberCount[key].length;
        if (f >= maxFre) {
            const temp: number = numberCount[key].length;
            const temp2: number = numberCount[key][temp-1] - numberCount[key][0] + 1;
            if (f === maxFre) res = Math.min(res, temp2);
            else {
                maxFre = f;
                res = temp2
            }
        }
    }

    return res;
};
}