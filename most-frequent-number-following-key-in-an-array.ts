{
    function mostFrequent(nums: number[], key: number): number {
        let frequency: Record<number, number> = {};

        for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            frequency[nums[i]] ? frequency[nums[i]]++ : (frequency[nums[i]] = 1);
        }
        }

        const max = Object.entries(frequency).sort(([, a], [, b]) => b - a)[0];

        return Number(max[0]);
    };

}