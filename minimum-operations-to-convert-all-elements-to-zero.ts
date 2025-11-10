{
    const minOperations = (nums: number[]): number => {
        const activeStack: number[] = [];
        let operationCount = 0;

        for (const currentValue of nums) {
            while (activeStack.length > 0 && activeStack[activeStack.length - 1] > currentValue) {
                activeStack.pop();
            }

            if (currentValue === 0) {
                continue;
            }

            if (activeStack.length === 0 || activeStack[activeStack.length - 1] < currentValue) {
                operationCount++;
                activeStack.push(currentValue);
            }
        }

        return operationCount
    };
}