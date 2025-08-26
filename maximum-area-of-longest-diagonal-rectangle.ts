{
    const areaOfMaxDiagonal = (dimensions: number[][]): number => {
        let bestArea = 0;
        let longestDiagonalSquared = 0;

        for (let rectIndex = 0; rectIndex < dimensions.length; rectIndex++) {
            const length = dimensions[rectIndex][0];
            const width = dimensions[rectIndex][1];
            const currentDiagonalSquared = length * length + width * width;
            const currentArea = length * width;

            if (currentDiagonalSquared > longestDiagonalSquared || 
            (currentDiagonalSquared === longestDiagonalSquared && currentArea > bestArea)) {
                longestDiagonalSquared = currentDiagonalSquared;
                bestArea = currentArea;
            }
        }

        return bestArea;
};
}