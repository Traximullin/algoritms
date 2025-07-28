{
    function countMaxOrSubsets(nums: number[]): number {
        let max = 0;
        let maxCount = 0;

        const bt = (i: number, currentSubsetOr: number) => {
            if (i === nums.length) {
                if (currentSubsetOr > max) {
                    max = currentSubsetOr;
                    maxCount = 1;
                } else if (currentSubsetOr === max) {
                    maxCount++;
                }
                return;
            }

            bt(i + 1, currentSubsetOr | nums[i]);

            bt(i + 1, currentSubsetOr);
        };

        bt(0, 0);
        return maxCount;
    };
}
