function minimumDeletions(nums: number[]): number {
    const n = nums.length;
    let min = 0, max = 0;
    let minVal = Infinity, maxVal = -Infinity;

    for (let i = 0; i < n; i++) {
        if (nums[i] < minVal) {
            min = i;
            minVal = nums[i];
        }
        if (nums[i] > maxVal) {
            max = i;
            maxVal = nums[i];
        }
    }

    return Math.min(
        Math.min(min, max) + 1 + (n - Math.max(min, max)),
        n - Math.min(min, max),
        Math.max(min, max) + 1
    );
};

console.log("123")
