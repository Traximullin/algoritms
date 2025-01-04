{
    function minimumOperations(grid: number[][]): number {
        let count = 0;

        for (let row = 1; row < grid.length; row++) {
        
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] <= grid[row - 1][col]) {
                    const diff = grid[row - 1][col] - grid[row][col] + 1; // +1 to make strictly increase
                    count += diff;
                    grid[row][col] += diff;
                }
            }
            
        }
    
        return count;
    };
}