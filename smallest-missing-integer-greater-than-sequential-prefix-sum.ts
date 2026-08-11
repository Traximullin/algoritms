function missingInteger(nums: number[]): number {
    let prefixSum: number = nums[0];
    const length: number = nums.length;
    const storage: Set<number> = new Set(nums);

    let index: number = 1;

    while (
        index < length &&
        nums[index] === nums[index - 1] + 1
    ) {
        prefixSum += nums[index];
        index++;
    }

    while (storage.has(prefixSum)) {
        prefixSum++;
    }

    return prefixSum;
}
