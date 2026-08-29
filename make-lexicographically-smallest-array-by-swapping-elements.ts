function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const indexes: number[] = nums.map((_, idx) => idx)
        .sort((a, b) => nums[a] - nums[b]);

    const result: number[] = [];

    let i: number = 0;
    const n: number = indexes.length;
    while (i < n) {
        const idxArr: number[] = [];
        const valArr: number[] = [];
        idxArr.push(indexes[i]);
        valArr.push(nums[indexes[i]]);
        i++;

        while (i < n && nums[indexes[i]] - nums[indexes[i - 1]] <= limit) {
            idxArr.push(indexes[i]);
            valArr.push(nums[indexes[i]]);
            i++;
        }
        idxArr.sort((a, b) => a - b);

        for (let j = 0; j < idxArr.length; j++) {
            result[idxArr[j]] = valArr[j];
        }
    }

    return result;
}
