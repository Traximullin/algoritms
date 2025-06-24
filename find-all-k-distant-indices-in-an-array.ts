{
    function findKDistantIndices(nums: number[], key: number, k: number): number[] {
        const result = new Set<number>();

        for (let i = 0; i < nums.length; i++)
            for (let j = 0; j < nums.length; j++)
                if (nums[j] === key && !result.has(i) && Math.abs(i - j) <= k) 
                    result.add(i);

        return [...result];
    };
}