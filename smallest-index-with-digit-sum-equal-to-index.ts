function smallestIndex(nums: number[]): number {
    const ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let res = 0;

        while (nums[i] > 0) {
            res += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10);
        }

        if (res === i) {
            ans.push(i);
        }
    }

    ans.sort((a, b) => a - b);

    if (ans.length === 0) {
        return -1;
    } else {
        return ans[0];
    }
};
