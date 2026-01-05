const maxMatrixSum = (matrix: number[][]): number => {
    let totalAbsoluteSum = 0;
    const matrixSize = matrix.length;
    let smallestAbsoluteValue = Infinity;
    let negativeCount = 0;

    for (let row = 0; row < matrixSize; row++) {
        for (let col = 0; col < matrixSize; col++) {
            const currentValue = matrix[row][col];
            const absoluteValue = Math.abs(currentValue);
            
            totalAbsoluteSum += absoluteValue;
            
            if (currentValue < 0) {
                negativeCount++;
            }
            
            smallestAbsoluteValue = Math.min(smallestAbsoluteValue, absoluteValue);
        }
    }

    if (negativeCount % 2 !== 0) {
        totalAbsoluteSum -= 2 * smallestAbsoluteValue;
    }

    return totalAbsoluteSum;
};