{
    function minimizeMax(numbers: number[], numPairs: number): number {
    if (numPairs === 0) {
        return 0;
    }

    numbers.sort((a, b) => a - b);

    let minPossibleDiff = 0;
    let maxPossibleDiff = numbers[numbers.length - 1] - numbers[0];

    let resultMinMaxDiff = maxPossibleDiff;

    const canFormEnoughPairs = (allowedMaxDiff: number): boolean => {
        let pairsFormedCount = 0;
        let i = 0;

        while (i < numbers.length - 1) {
            if (numbers[i + 1] - numbers[i] <= allowedMaxDiff) {
                pairsFormedCount++;
                i += 2;
            } else {
                i += 1;
            }

            if (pairsFormedCount >= numPairs) {
                return true;
            }
        }
        return false;
    };

    while (minPossibleDiff <= maxPossibleDiff) {
        const currentMidDiff = Math.floor((minPossibleDiff + maxPossibleDiff) / 2);

        if (canFormEnoughPairs(currentMidDiff)) {
            resultMinMaxDiff = currentMidDiff;
            maxPossibleDiff = currentMidDiff - 1;
        } else {
            minPossibleDiff = currentMidDiff + 1;
        }
    }

    return resultMinMaxDiff;
}
}