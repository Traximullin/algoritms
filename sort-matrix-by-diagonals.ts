{
    const sortMatrix = (grid: number[][]): number[][] => {
        const matrixSize = grid.length;

        for (let startingRow = 0; startingRow < matrixSize; startingRow++) {
            const diagonalElements: number[] = [];
            
            for (let offset = 0; startingRow + offset < matrixSize; offset++) {
                diagonalElements.push(grid[startingRow + offset][offset]);
            }
            
            diagonalElements.sort((a, b) => b - a);
            
            for (let offset = 0; startingRow + offset < matrixSize; offset++) {
                grid[startingRow + offset][offset] = diagonalElements[offset];
            }
        }

        for (let startingColumn = 1; startingColumn < matrixSize; startingColumn++) {
            const diagonalElements: number[] = [];
            
            for (let offset = 0; startingColumn + offset < matrixSize; offset++) {
                diagonalElements.push(grid[offset][startingColumn + offset]);
            }
            
            diagonalElements.sort((a, b) => a - b);
            
            for (let offset = 0; startingColumn + offset < matrixSize; offset++) {
                grid[offset][startingColumn + offset] = diagonalElements[offset];
            }
        }

        return grid;
    };
}