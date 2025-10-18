{
    const maxDistinctElements = (nums: number[], k: number): number => {
        nums.sort((a, b) => a - b);
        
        let distinctCount = 0;
        let previousValue = -Infinity;

        for (const num of nums) {
            const minPossibleValue = num - k;
            const mustBeGreaterThan = previousValue + 1;
            const maxPossibleValue = num + k;
            
            const optimalValue = Math.min(
                Math.max(minPossibleValue, mustBeGreaterThan),
                maxPossibleValue
            );

            if (optimalValue > previousValue) {
                distinctCount++;
                previousValue = optimalValue;
            }
        }

        return distinctCount;
    };
}