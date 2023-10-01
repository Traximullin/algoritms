{
    const smallestRangeI = function(nums, k) {
        const diff = Math.max(...nums) - Math.min(...nums) - 2 * k

        return diff < 0 ? 0 : diff
    };
}