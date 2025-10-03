{
    function minPathSum(grid: number[][]): number {
        const rowCount = grid.length;
        const colCount = grid[0].length;

        for (let i = 0; i < rowCount; i++) {
            for (let j = 0; j < colCount; j++) {
                if (i === 0 && j === 0) continue; 
                else if (i === 0) grid[i][j] += grid[i][j - 1]; 
                else if (j === 0) grid[i][j] += grid[i - 1][j]; 
                else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]); 
            }
        }

        return grid[rowCount - 1][colCount - 1];
    }
}